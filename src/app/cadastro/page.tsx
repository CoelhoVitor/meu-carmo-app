"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CadastroPage: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const router = useRouter();

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await res.json();

      if (res.ok) {
        setNome("");
        setEmail("");
        setSenha("");
        router.push("/login");
      } else {
        setMensagem(data.error || "Erro ao cadastrar usuário.");
      }
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao cadastrar usuário.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-4xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Cadastro</h2>
        <form className="space-y-4" onSubmit={handleCadastro}>
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
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            style={{
              cursor: "pointer",
            }}
          >
            Cadastrar
          </button>
        </form>

        {mensagem && <p className="text-center text-sm text-red-500 mt-4">{mensagem}</p>}

        <p className="text-sm text-center text-gray-600">
          Já tem uma conta?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
};

export default CadastroPage;