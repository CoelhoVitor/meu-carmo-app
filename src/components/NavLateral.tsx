'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function NavLateral() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label={open ? 'Fechar menu lateral' : 'Abrir menu lateral'}
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 p-2 rounded-md bg-white shadow-md hover:bg-gray-100 focus:outline-none cursor-pointer"
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Início
              </Link>
            </li>

            <li>
              <Link
                href="/surveySede"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
              >
                SurveySede
              </Link>
            </li>

            <li>
              <Link
                href="/surveyElo"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-gray-100"
              >
                SurveyElo
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
