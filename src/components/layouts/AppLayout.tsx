'use client';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow">
        <div
          className="fixed inset-0 -z-10 opacity-30 dark:opacity-15"
          style={{
            backgroundImage: "url('/images/acampamento.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        {children}
      </main>
    </div>
  );
}
