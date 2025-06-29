import { ThemeToggle } from "./components/ThemeToggle";

import { Link } from "@/components/internal/Link";

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
      <h1 className="text-xl font-semibold ">
        <Link color="pink" link="https://github.com/sebilune">
          Sebi
        </Link>
      </h1>
      <ThemeToggle />
    </header>
  );
}
