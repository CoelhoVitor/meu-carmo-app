"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export const CadastroForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMensagem("");

    try {
      const res = await fetch("/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao cadastrar usuário");
      }

      router.push("/login");
    } catch (error) {
      console.error(error);
      setMensagem(error instanceof Error ? error.message : "Erro ao cadastrar usuário");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
          Nome
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Digite seu nome"
          disabled={loading}
          required
        />
      </div>
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
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Digite seu email"
          disabled={loading}
          required
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
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Digite sua senha"
          disabled={loading}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>

      {mensagem && <p className="text-center text-sm text-red-500 mt-4">{mensagem}</p>}
    </form>
  );
};
