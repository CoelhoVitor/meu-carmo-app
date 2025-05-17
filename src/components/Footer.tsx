import Image from "next/image";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <Image
            src="/images/logocarmo.png"
            alt="Logo Carmo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Meu Carmo App. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
