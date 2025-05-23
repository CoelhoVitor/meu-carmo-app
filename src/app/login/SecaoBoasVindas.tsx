export function SecaoBoasVindas() {
  return (
    <div
      className="hidden md:flex flex-col justify-center items-center w-1/2 p-8 rounded-l-4xl"
      style={{
        backgroundImage: "url('/images/acampamento.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Bem-vindo</h1>
        <p className="text-white">
          &quot;O melhor meio para alcançar a felicidade é contribuir para a felicidade dos outros&quot;
        </p>
        <p className="text-white">- Baden Powell</p>
      </div>
    </div>
  );
}
