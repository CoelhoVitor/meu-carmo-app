import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import prisma from "./prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        senha: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const usuario = await prisma.usuario.findUnique({
          where: { email: credentials?.email },
        });

        if (!usuario) throw new Error("Usuário não encontrado");

        const isValid = await compare(credentials!.senha, usuario.senha);
        if (!isValid) throw new Error("Senha inválida");

        return usuario;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/login?error=true",
  },
};
