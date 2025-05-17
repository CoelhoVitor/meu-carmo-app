"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const paginasSemNav = ["/login", "/cadastro"];
  const isPaginaSemNav = paginasSemNav.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!isPaginaSemNav && <Nav />}
      <main className={`flex-grow ${!isPaginaSemNav ? "pt-16 pb-16" : ""}`}>
        <div
          className="fixed inset-0"
          style={{
            backgroundImage: "url('/images/acampamento.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
            zIndex: -1,
          }}
        ></div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
