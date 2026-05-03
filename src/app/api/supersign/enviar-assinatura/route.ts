import { NextResponse } from 'next/server';
import { generateSuperSignJWT } from '@/auth/jwt';

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const token = await generateSuperSignJWT();
    const accountId = process.env.SUPERSIGN_ACCOUNT_ID ?? '';

    console.log('token', token);
    console.log('accountId', accountId);

    const res = await fetch('https://api.sign.supersign.com.br/v2/envelopes/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'x-account-id': accountId,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    return NextResponse.json(
      { status: res.status, body: text },
      { status: res.status },
    );
  } catch (error) {
    console.error('Erro ao encaminhar para SuperSign:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar para SuperSign' },
      { status: 500 },
    );
  }
}
