export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Atividades Externas</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Gerencie suas solicitações de atividades externas.
          </p>
          <a
            href="/dashboard/solicitacao-atividade-externa"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Nova Solicitação
          </a>
        </div>
        {/* Adicione mais cards conforme necessário */}
      </div>
    </div>
  );
}