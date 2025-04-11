import Link from "next/link";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <header className="bg-blue-300 text-white py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Nav />
          <h1 className="text-2xl font-bold">Meu Carmo App</h1>
        </div>
      </header>
      <main className="flex items-center justify-center min-h-screen">
        <Link
          href="/solicitacao-atividade-externa"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Solicitação de Atividade Externa
        </Link>
      </main>
    </div>
  );
}
