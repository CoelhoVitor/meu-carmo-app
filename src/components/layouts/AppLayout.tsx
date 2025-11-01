'use client';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div
          className="fixed inset-0"
          style={{
            backgroundImage: "url('/images/acampamento.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
            zIndex: -1,
          }}
        ></div>
        {children}
      </main>
    </div>
  );
}
