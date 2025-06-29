import { ThemeToggle } from "./components/ThemeToggle";
import { ArrowUpRight } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={
        "flex items-center justify-between" + (className ? " " + className : "")
      }
    >
      <a
        href="https://github.com/sebilune"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <h1 className="flex items-center font-semibold">
          <span className="no-underline transition-all duration-200 decoration-pink-400 decoration-2 underline-offset-4 group-hover:underline">
            Sebi
          </span>
          <ArrowUpRight size={20} className="ml-1 text-pink-400" />
        </h1>
      </a>
      <ThemeToggle />
    </header>
  );
}
