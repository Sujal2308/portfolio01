import { ThemeToggle } from "./components/ThemeToggle";

import { Link } from "@/components/internal/Link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/sebilune.png" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold ">
          <Link color="pink" link="https://github.com/sebilune">
            Sebi
          </Link>
        </h1>
      </div>
      <ThemeToggle />
    </header>
  );
}
