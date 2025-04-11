export default function Nav() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <a
            href="#home"
            className="text-white hover:text-blue-700 transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white hover:text-blue-700 transition-colors"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-white hover:text-blue-700 transition-colors"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}