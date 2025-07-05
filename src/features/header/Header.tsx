import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
        <div className="relative">
          <a
            href="https://github.com/sebilune"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar className="w-14 h-14">
              <AvatarImage
                src="https://github.com/sebilune.png"
                className="w-full h-full"
              />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
          </a>
        </div>
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
