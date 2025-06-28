import { ThemeToggle } from "./components/ThemeToggle";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="font-medium">Sebi</h1>
      <ThemeToggle />
    </header>
  );
}
