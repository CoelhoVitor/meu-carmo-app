"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch";

export default function Nav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo e Menu Principal */}
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center">
              <Image
                src="/images/logocarmo.png"
                alt="Logo Carmo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                Meu Carmo
              </span>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/perfil"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Perfil
            </Link>

            <ThemeSwitch />

            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              <LogOut size={20} className="mr-1" />
              Sair
            </button>
          </div>

          {/* Menu Mobile (Hamburger) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/perfil"
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Perfil
              </Link>

              <ThemeSwitch mobile setIsMenuOpen={setIsMenuOpen} />

              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="w-full text-left flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium"
              >
                <LogOut size={20} className="mr-2" />
                Sair
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}