import Link from 'next/link';
import { ArrowRight, Building2, Users } from 'lucide-react';

export default function Home() {
  const opcoes = [
    {
      titulo: 'Sede',
      descricao: 'Abrir formulário',
      link: '/surveySede',
      icone: Building2,
    },
    {
      titulo: 'ELO',
      descricao: 'Abrir formulário',
      link: '/surveyElo',
      icone: Users,
    },
  ];

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        Meu Carmo
      </p>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Solicitação de Atividade
      </h1>

      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        Escolha o tipo de solicitação para começar. O formulário é preenchido
        em etapas e o documento é gerado automaticamente para assinatura.
      </p>

      <div className="mt-10 grid w-full gap-4 sm:grid-cols-2">
        {opcoes.map((opcao) => (
          <Opcao key={opcao.link} {...opcao} />
        ))}
      </div>
    </div>
  );
}

function Opcao({
  titulo,
  descricao,
  link,
  icone: Icone,
}: {
  titulo: string;
  descricao: string;
  link: string;
  icone: typeof Building2;
}) {
  return (
    <Link
      href={link}
      className="group flex items-center gap-4 rounded-xl border border-border-soft bg-surface p-5 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transform-none"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary-soft-foreground">
        <Icone size={22} aria-hidden />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-base font-semibold text-foreground">
          {titulo}
        </span>
        <span className="block text-sm text-muted">{descricao}</span>
      </span>

      <ArrowRight
        size={18}
        aria-hidden
        className="shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary motion-reduce:transform-none"
      />
    </Link>
  );
}
