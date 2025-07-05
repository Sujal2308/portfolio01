import { BoxReveal } from "@/components/magicui/box-reveal";

import { Link } from "@/components/internal/Link";
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
      <div className="flex items-center gap-2 group">
        <h1 className="text-xl font-semibold ">
          <BoxReveal boxColor="#fb64b6" delay={0.025}>
            <Link color="pink" link="https://github.com/sebilune">
              Sebi
            </Link>
          </BoxReveal>
        </h1>
      </div>
      <ThemeToggle />
    </header>
  );
}
