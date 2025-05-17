import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeSwitchProps {
  mobile?: boolean;
  setIsMenuOpen?: (isOpen: boolean) => void;
}

const ThemeSwitch = ({ mobile, setIsMenuOpen }: ThemeSwitchProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Aguarda a montagem do componente para evitar incompatibilidade de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (mobile ? (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIsMenuOpen?.(false);
      }}
      className="w-full text-left flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium cursor-pointer"
    >
      {mounted && (theme === "dark" ? <Sun size={20} className="mr-2" /> : <Moon size={20} className="mr-2" />)}
      {mounted && (theme === "dark" ? "Modo Claro" : "Modo Escuro")}
    </button>
  ) : (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
    >
      {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
    </button>
  )
  );
};

export default ThemeSwitch;