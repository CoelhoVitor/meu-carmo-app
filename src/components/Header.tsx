import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-between border-b border-border-soft bg-background/85 px-4 backdrop-blur sm:px-6">
      <Link
        href="/home"
        className="flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Image
          src="/images/logocarmo.png"
          alt="Logo Carmo"
          width={36}
          height={36}
          className="rounded-full bg-white ring-1 ring-border-soft"
        />

        <span className="ml-3 text-lg font-semibold tracking-tight text-foreground">
          Meu Carmo
        </span>
      </Link>

      <ThemeToggle />
    </header>
  );
}
