import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            titulo="Atividades"
            descricao="Gerencie suas solicitações de atividades"
            link="/survey"
            textoBotao="Nova atividade"
          />
        </div>
      </div>
    </>
  );
}

function Card({
  titulo,
  descricao,
  link,
  textoBotao,
}: {
  titulo: string;
  descricao: string;
  link: string;
  textoBotao: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">{titulo}</h2>

      <p className="text-gray-600 mb-6">{descricao}</p>

      <Link
        href={link}
        className="mt-auto inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        {textoBotao}
      </Link>
    </div>
  );
}
