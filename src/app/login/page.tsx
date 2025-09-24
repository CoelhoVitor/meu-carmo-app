import { LoginForm } from './LoginForm';
import { SecaoBoasVindas } from './SecaoBoasVindas';

export default function LoginPage() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="bg-white shadow-2xl rounded-4xl w-full max-w-4xl">
        <div className="flex flex-col md:flex-row h-full">
          <SecaoBoasVindas />

          <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
            <div className="w-full max-w-sm">
              <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
              <LoginForm />

              <p className="text-center text-sm text-gray-600 mt-4">
                Não tem uma conta?{' '}
                <a href="/cadastro" className="text-blue-600 hover:underline">
                  Cadastre-se já!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
