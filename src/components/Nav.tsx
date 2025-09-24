import Link from 'next/link';
import Image from 'next/image';
import { MobileMenu, DesktopMenu } from './NavMenus';
import { signOut } from '@/features/auth/actions/deslogar';

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo e Menu Principal */}
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center">
              <div className="relative">
                <Image
                  src="/images/logocarmo.png"
                  alt="Logo Carmo"
                  width={40}
                  height={40}
                  className="rounded-full bg-white"
                />
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-900">
                Meu Carmo
              </span>
            </Link>
          </div>

          {/* Menus (Desktop e Mobile) */}
          <DesktopMenu onSignOut={signOut} />
          <MobileMenu onSignOut={signOut} />
        </div>
      </div>
    </nav>
  );
}