import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white z-50 h-20 flex items-center justify-between px-10 shadow-lg">
      <Link href="/home" className="flex items-center">
        <div className="relative">
          <Image
            src="/images/logocarmo.png"
            alt="Logo Carmo"
            width={40}
            height={40}
            className="rounded-full bg-white"
          />
        </div>

        <span className="ml-2 text-lg font-semibold text-gray-800">
          Meu Carmo
        </span>
      </Link>
    </header>
  );
}
