import { NextResponse } from 'next/server';

interface ZapSignPayload {
  name: string;
  base64_pdf: string;
  signers: Array<{
    name: string;
    email: string;
    auth_mode: string;
    send_automatic_email: boolean;
  }>;
}

interface ZapSignRequest {
  base64_pdf: string;
}

export async function POST(req: Request) {
  try {
    const { base64_pdf } = (await req.json()) as ZapSignRequest;

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

    const payload: ZapSignPayload = {
      name: 'Documento de Teste - Meu Carmo',
      base64_pdf,
      signers: [
        {
          name: 'Destinatário Teste',
          email: 'naoimp2@outlook.com',
          auth_mode: 'assinaturaTela',
          send_automatic_email: true,
        },
      ],
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
