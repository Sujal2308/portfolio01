import { ThemeToggle } from "./components/ThemeToggle";

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
      <h1 className="font-medium">Sebi</h1>
      <ThemeToggle />
    </header>
  );
}
