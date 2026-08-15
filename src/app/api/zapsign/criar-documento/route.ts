import { NextResponse } from 'next/server';
import { PDFDocument } from 'pdf-lib';
import type { SurveyFlowConfig } from '@/utils/surveyFlow';

interface ZapSignSigner {
  name: string;
  email: string;
  auth_mode: string;
  send_automatic_email: boolean;
  custom_message: string;
  order_group?: number;
}

interface ZapSignPayload {
  name: string;
  base64_pdf: string;
  signature_order_active?: boolean;
  observers?: string[];
  signers: ZapSignSigner[];
}

interface ZapSignRequest {
  base64_pdf: string;
  emailDestinatario?: string;
  surveyFlowConfig?: SurveyFlowConfig;
}

async function getLastPageIndex(base64Pdf: string): Promise<number> {
  const pdfDoc = await PDFDocument.load(Buffer.from(base64Pdf, 'base64'));
  return pdfDoc.getPageCount() - 1;
}

async function readJsonBody(
  response: Response,
): Promise<Record<string, unknown>> {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    return {};
  }
}

function buildSigners(
  surveyFlowConfig?: SurveyFlowConfig,
  fallbackEmail?: string,
): ZapSignSigner[] {
  if (surveyFlowConfig?.signerDefaults) {
    const { signerDefaults } = surveyFlowConfig;

    return [
      {
        name: signerDefaults.chefe.name,
        email: signerDefaults.chefe.email,
        auth_mode: signerDefaults.chefe.authMode,
        send_automatic_email: signerDefaults.chefe.sendAutomaticEmail,
        custom_message:
          'Olá, chefe! Segue a solicitação de atividade para assinatura.',
        order_group: 1,
      },
      {
        name: signerDefaults.diretoria.name,
        email: signerDefaults.diretoria.email,
        auth_mode: signerDefaults.diretoria.authMode,
        send_automatic_email: signerDefaults.diretoria.sendAutomaticEmail,
        custom_message:
          'Olá, diretoria! Segue a solicitação de atividade para análise.',
        order_group: 2,
      },
    ];
  }

  return [
    {
      name: 'Erro',
      email: fallbackEmail ?? '',
      auth_mode: 'assinaturaTela',
      send_automatic_email: Boolean(fallbackEmail),
      custom_message: 'Erro ao buscar destinatários',
    },
  ];
}

export async function POST(req: Request) {
  try {
    const { base64_pdf, emailDestinatario, surveyFlowConfig } =
      (await req.json()) as ZapSignRequest;

    if (!base64_pdf) {
      return NextResponse.json(
        { error: 'base64 é obrigatório' },
        { status: 400 },
      );
    }

    const apiToken = process.env.ZAPSIGN_API_TOKEN;
    if (!apiToken) {
      return NextResponse.json(
        { error: 'Api token não configurado' },
        { status: 500 },
      );
    }

    const signers = buildSigners(surveyFlowConfig, emailDestinatario);
    if (signers.length === 0) {
      return NextResponse.json(
        { error: 'Nenhum signatário foi configurado' },
        { status: 400 },
      );
    }

    const observers = [
      process.env.NOTIFICATION_EMAIL_1!,
      process.env.NOTIFICATION_EMAIL_2!,
    ];

    const payload: ZapSignPayload = {
      name: surveyFlowConfig?.documentName ?? 'Documento de Teste - Meu Carmo',
      base64_pdf,
      signature_order_active: true,
      observers,
      signers,
    };

    const response = await fetch(
      'https://sandbox.api.zapsign.com.br/api/v1/docs/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify(payload),
      },
    );

    const responseData = await readJsonBody(response);

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Erro ao criar documento no ZapSign', details: responseData },
        { status: response.status },
      );
    }

    const signersData = responseData.signers as
      | Array<{ token: string }>
      | undefined;

    if (!signersData || signersData.length < 2) {
      return NextResponse.json(
        { error: 'Documento criado sem os signatários esperados' },
        { status: 500 },
      );
    }

    const lastPageIndex = await getLastPageIndex(base64_pdf);

    const rubricas = [
      {
        page: lastPageIndex,
        relative_position_bottom: 12,
        relative_position_left: 20,
        relative_size_x: 19.55,
        relative_size_y: 9.42,
        signer_token: signersData[0].token,
        type: 'signature',
      },
      {
        page: lastPageIndex,
        relative_position_bottom: 2,
        relative_position_left: 20,
        relative_size_x: 19.55,
        relative_size_y: 9.42,
        signer_token: signersData[1].token,
        type: 'signature',
      },
    ];

    const placeResponse = await fetch(
      `https://sandbox.api.zapsign.com.br/api/v1/docs/${responseData.token}/place-signatures/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify({ rubricas }),
      },
    );

    const placeData = await readJsonBody(placeResponse);

    if (!placeResponse.ok) {
      return NextResponse.json(
        {
          error: 'Erro ao posicionar assinaturas no ZapSign',
          details: placeData,
        },
        { status: placeResponse.status },
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Documento criado e assinaturas posicionadas com sucesso',
      data: responseData,
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Erro interno ao processar requisição: ${error}` },
      { status: 500 },
    );
  }
}
