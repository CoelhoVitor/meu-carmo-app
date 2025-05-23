import { NextResponse } from "next/server";
import { hashPassword } from "@/auth/password";
import { createSession, generateRandomSessionToken } from "@/auth/session";
import { setSessionCookie } from "@/auth/cookie";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { nome, email, senha } = await req.json();

    if (!nome || !email || !senha) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios." }, { status: 400 });
    }

    const usuarioExistente = await prisma.user.findUnique({
      where: { email },
    });

    if (usuarioExistente) {
      return NextResponse.json({ error: "Email já cadastrado." }, { status: 400 });
    }

    const senhaCriptografada = await hashPassword(senha);

    const novoUsuario = await prisma.user.create({
      data: {
        nome,
        email,
        senha: senhaCriptografada,
      },
    });

    const sessionToken = generateRandomSessionToken();
    const session = await createSession(sessionToken, novoUsuario.id);

    await setSessionCookie(sessionToken, session.expiresAt);

    return NextResponse.json({ message: "Usuário cadastrado com sucesso!", user: novoUsuario });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao cadastrar usuário." }, { status: 500 });
  }
}