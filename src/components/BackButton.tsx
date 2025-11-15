'use client';

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      Voltar
    </button>
  );
}
