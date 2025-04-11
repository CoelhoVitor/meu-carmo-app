"use client";

import { NumericFormat } from "react-number-format";
import RadioSection from "../../components/RadioSection";


export default function SolicitacaoAtividadeExterna() {
  const secoes = [
    "Alcateia Kotick",
    "Alcateia Mohwa",
    "Alcateia Seeonee",
    "Tropa Xingu",
    "Tropa Cavalo Marinho",
    "Tropa Viking",
    "Clã Fênix",
  ];

  const niveisAtividade = [
    "Local-Seção",
    "Grupo",
    "Distrital",
    "Regional",
    "Nacional",
    "Internacional",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Solicitação de Atividade Externa</h1>

        <div className="mb-6">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
            Nome da Atividade
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite o nome da atividade"
          />
        </div>

        <RadioSection title="Seção" name="secao" options={secoes} />
        <RadioSection title="Nível da Atividade" name="nivelAtividade" options={niveisAtividade} />

        <div id="inscricoes" className="mb-6">
          <span className="block mb-3 text-sm font-medium text-gray-700 bg-blue-50 p-4 rounded-md" >
            Inscrições
          </span>

          <label htmlFor="taxaInscricao" className="block text-sm font-medium text-gray-700" >
            Valor da taxa
          </label>
          <NumericFormat
            id="taxaInscricao"
            name="taxaInscricao"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite o valor da taxa de inscrição"
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            decimalScale={2}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}