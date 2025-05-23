"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMensagem("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao fazer login");
      }

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      setMensagem(error instanceof Error ? error.message : "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleLogin}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required
          placeholder="Digite seu email"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
          Senha
        </label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          disabled={loading}
          required
          placeholder="Digite sua senha"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="text-right">
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Esqueceu a senha?
        </a>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50 cursor-pointer"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>

      {mensagem && (
        <p className="mt-4 text-red-600 text-sm text-center">{mensagem}</p>
      )}
    </form>
  );
}
