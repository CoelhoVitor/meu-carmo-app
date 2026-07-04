import { NextResponse } from 'next/server';
import type { SurveyFlowConfig } from '@/utils/surveyFlow';

interface ZapSignSigner {
  name: string;
  email: string;
  auth_mode: string;
  send_automatic_email: boolean;
  custom_message: string;
  signature_placement?: string;
  rubrica_placement?: string;
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
        signature_placement: '<<chefe_assinatura>>',
      },
      {
        name: signerDefaults.diretoria.name,
        email: signerDefaults.diretoria.email,
        auth_mode: signerDefaults.diretoria.authMode,
        send_automatic_email: signerDefaults.diretoria.sendAutomaticEmail,
        custom_message:
          'Olá, diretoria! Segue a solicitação de atividade para análise.',
        signature_placement: '<<diretoria_assinatura>>',
      },
      {
        name: signerDefaults.comissao.name,
        email: signerDefaults.comissao.email,
        auth_mode: signerDefaults.comissao.authMode,
        send_automatic_email: signerDefaults.comissao.sendAutomaticEmail,
        custom_message:
          'Olá, comissão! Segue a solicitação de atividade para análise.',
        signature_placement: '<<comissao_assinatura>>',
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
        { error: 'api token não configurado' },
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
      process.env.NOTIFICATION_EMAIL_1 ?? 'vitorvcs@hotmail.com',
      process.env.NOTIFICATION_EMAIL_2 ?? 'naoimp2@outlook.com',
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

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Erro ZapSign:', responseData);
      return NextResponse.json(
        { error: 'Erro ao criar documento no ZapSign', details: responseData },
        { status: response.status },
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Documento criado com sucesso no ZapSign',
      data: responseData,
    });
  } catch (error) {
    console.error('Erro ao processar requisição ZapSign:', error);

    return NextResponse.json(
      { error: 'Erro interno ao processar requisição' },
      { status: 500 },
    );
  }
}
