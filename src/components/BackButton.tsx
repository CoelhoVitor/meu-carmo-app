'use client';

import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border-soft bg-surface px-3.5 py-2 text-sm font-medium text-foreground shadow-sm transition-colors duration-200 hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <ArrowLeft size={16} aria-hidden />
      Voltar
    </button>
  );
}
