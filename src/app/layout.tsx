import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextAuthProvider } from "./providers";
import "./globals.css";
import AppLayout from "@/components/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu Carmo App",
  description: "SAPS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full`}
      >
        <NextAuthProvider>
          <AppLayout>{children}</AppLayout>
        </NextAuthProvider>
      </body>
    </html >
  );
}
