"use client";

import { Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface MenuProps {
  onSignOut: () => Promise<void>;
}

export function MobileMenu({ onSignOut }: MenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Menu Mobile (Hamburger) */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md text-gray-700 dark:text-gray-200"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
            </Link>            <button
              onClick={() => onSignOut()}
              className="w-full text-left flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium"
            >
              <LogOut size={20} className="mr-2" />
              Sair
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function DesktopMenu({ onSignOut }: MenuProps) {
  return (
    <div className="hidden md:flex md:items-center md:space-x-4">
      <Link
        href="/perfil"
        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
      >
        Perfil
      </Link>

      <button
        onClick={() => onSignOut()}
        className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
      >
        <LogOut size={20} className="mr-1" />
        Sair
      </button>
    </div>
  );
}
