import Link from 'next/link';

export default function Home() {
  const botoes = [
    // {
    //   texto: 'Sede',
    //   link: '/surveySede',
    // },
    {
      texto: 'ELO',
      link: '/surveyElo',
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card titulo="Solicitação de Atividade" botoes={botoes} />
        </div>
      </div>
    </>
  );
}

function Card({
  titulo,
  descricao,
  botoes,
}: {
  titulo: string;
  descricao?: string;
  botoes: botao[];
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">{titulo}</h2>

      <p className="text-gray-600 mb-6">{descricao}</p>

      <div className="flex space-x-4">
        {botoes.map((botao, index) => (
          <Botao key={index} botao={botao} />
        ))}
      </div>
    </div>
  );
}

type botao = {
  texto: string;
  link: string;
};

function Botao({ botao }: { botao: botao }) {
  return (
    <div className="pr-1 last:pr-0">
      <Link
        href={botao.link}
        className="mt-auto inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        <b>{botao.texto}</b>
      </Link>
    </div>
  );
}
