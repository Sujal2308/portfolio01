import { BoxReveal } from "@/components/magicui/box-reveal";
import { useEffect, useState } from "react";

import { Link } from "@/components/internal/Link";
import { ThemeToggle } from "./components/ThemeToggle";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "MERN Developer",
    "Problem Solver",
    "Backend Developer",
    "Blockchain Enthusiast",
  ];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex];

        if (!isDeleting) {
          if (currentText.length < current.length) {
            setCurrentText(current.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(current.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <header className={className}>
      {/* Desktop Layout */}
      <div className="hidden sm:flex items-center justify-between">
        <div className="flex items-start gap-4">
          <img
            src="/svg/logos/sujal.jpg"
            alt="Sujal"
            className="w-20 h-20 rounded-full object-cover border-3 border-pink-400/30"
            style={{ objectPosition: "center top" }}
          />
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">
              <BoxReveal boxColor="#fb64b6" delay={0.025}>
                <Link color="pink" link="https://github.com/Sujal2308">
                  Sujal
                </Link>
              </BoxReveal>
            </h1>
            <div className="text-lg font-mono text-neutral-600 dark:text-neutral-400 h-7">
              {currentText}
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-xl font-semibold">
            <BoxReveal boxColor="#8b5cf6" delay={0.025}>
              <Link
                color="purple"
                link="https://drive.google.com/file/d/1TckG6ETmH2WflrjcRknOOG8O0ZqBOE0m/view"
              >
                Resume
              </Link>
            </BoxReveal>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/svg/logos/sujal.jpg"
            alt="Sujal"
            className="w-16 h-16 rounded-full object-cover border-2 border-pink-400/30"
            style={{ objectPosition: "center top" }}
          />
          <div>
            <h1 className="text-2xl font-semibold">
              <BoxReveal boxColor="#fb64b6" delay={0.025}>
                <Link color="pink" link="https://github.com/Sujal2308">
                  Sujal
                </Link>
              </BoxReveal>
            </h1>
            <div className="text-sm font-mono text-neutral-600 dark:text-neutral-400 h-5">
              {currentText}
              <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
