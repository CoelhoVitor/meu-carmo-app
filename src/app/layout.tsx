import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
