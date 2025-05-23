import { NextResponse } from "next/server";
import { verifyPasswordHash } from "@/auth/password";
import { createSession, generateRandomSessionToken } from "@/auth/session";
import { setSessionCookie } from "@/auth/cookie";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, senha } = await req.json();

    if (!email || !senha) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios." }, { status: 400 });
    }

    const usuarioExistente = await prisma.user.findUnique({
      where: { email },
    });

    if (!usuarioExistente) {
      return NextResponse.json({ error: "Email ou senha inválidos" }, { status: 400 });
    }

    const senhaValida = await verifyPasswordHash(usuarioExistente.senha, senha);

    if (!senhaValida) {
      return NextResponse.json({ error: "Email ou senha inválidos" }, { status: 400 });
    }

    const sessionToken = generateRandomSessionToken();
    const session = await createSession(sessionToken, usuarioExistente.id);

    await setSessionCookie(sessionToken, session.expiresAt);

    return NextResponse.json({ message: "Login realizado com sucesso!", user: usuarioExistente });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao realizar login." }, { status: 500 });
  }
}