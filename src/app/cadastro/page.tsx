import { CadastroForm } from './CadastroForm';

export default function CadastroPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-4xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Cadastro</h2>
        <CadastroForm />

        <p className="text-sm text-center text-gray-600">
          Já tem uma conta?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
};