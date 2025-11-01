import type { Metadata } from 'next';
import './globals.css';
import AppLayout from '@/components/layouts/AppLayout';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Meu Carmo App',
  description: 'SAPS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full" suppressHydrationWarning>
      <body className="antialiased min-h-full">
        <Header />

        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
