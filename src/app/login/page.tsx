import React from "react";

const LoginPage: React.FC = () => {

  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="bg-white shadow-2xl rounded-4xl  w-full max-w-4xl">
        <div className="flex flex-col md:flex-row h-full">
          {SecaoInicial}

          {SecaoLogin()}
        </div>
      </div>
    </div >
  );
};

export default LoginPage;

const SecaoInicial = <div className="hidden md:flex flex-col justify-center items-center w-1/2 p-8 rounded-l-4xl"
  style={{
    backgroundImage: "url('/images/acampamento.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
  <div className="text-center">
    <h1 className="text-4xl font-bold text-yellow-400 mb-4">Bem-vindo</h1>
    <p className="text-white">
      &quot;O melhor meio para alcançar a felicidade é contribuir para a felicidade dos outros&quot;
    </p>
    <p className="text-white">- Baden Powell</p>
  </div>
</div>;

const SecaoLogin = () => {
  return <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
    <div className="w-full max-w-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-300" />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="password"
            placeholder="Digite sua senha"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-300" />
        </div>

        <div className="text-right">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Esqueceu a senha?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        Não tem uma conta?{" "}
        <a href="/cadastro" className="text-blue-600 hover:underline">
          Cadastre-se já!
        </a>
      </p>
    </div>
  </div>;
};
