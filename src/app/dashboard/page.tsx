import ProtectedLayout from '@/components/layouts/ProtectedLayout';

export default function DashboardPage() {
  return (
    <ProtectedLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Atividades Externas</h2>
            <p className="text-gray-600 mb-6">
              Gerencie suas solicitações de atividades externas.
            </p>
            <a
              href="/dashboard/solicitacao-atividade-externa"
              className="mt-auto inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Nova Solicitação
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Perfil</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Visualize e atualize suas informações pessoais.
            </p>
            <a
              href="/dashboard/perfil"
              className="mt-auto inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
            >
              Ver Perfil
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Histórico</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Acompanhe o histórico de suas solicitações.
            </p>
            <a
              href="#"
              className="mt-auto inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
            >
              Ver Histórico
            </a>
          </div>
        </div>
      </div>
    </ProtectedLayout>
  );
}