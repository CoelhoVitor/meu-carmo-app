import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center">
        <Image
          className="dark:invert"
          src="/images/logocarmo.png"
          alt="Carmo logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <div className="flex flex-row items-center sm:flex-row sm:items-center gap-4">
            <label htmlFor="email" className="text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              className="border border-gray-300 rounded-md p-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-row items-center sm:flex-row sm:items-center gap-4">
            <label htmlFor="password" className="text-sm font-medium">
              Senha:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              className="border border-gray-300 rounded-md p-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/home"
            rel="noopener noreferrer"
          >
            Entrar
          </Link>
        </div>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Nos conheça{" "}
          <a
            href="https://web.gemarcarmo.org.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            G.E.Carmo
          </a>
        </p >
      </footer >
    </div >
  );
};

export default Home;