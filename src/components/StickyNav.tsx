import { useState, useEffect } from "react";
import { ThemeToggle } from "@/features/header/components/ThemeToggle";
import { FolderOpen, Code, GraduationCap, Trophy } from "lucide-react";

export function StickyNav() {
  const [activeLink, setActiveLink] = useState("");

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "projects-section",
        "skills-section",
        "education-section",
        "activities-section",
      ];
      const scrollPosition = window.scrollY + 100; // Add offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="flex items-center gap-4 px-6 py-3 bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-full shadow-2xl">
        <div className="flex gap-3">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, "projects-section")}
            className={`p-2.5 rounded-full transition-all duration-300 ${
              activeLink === "projects-section"
                ? "bg-orange-500/20 text-orange-600 dark:text-orange-400"
                : "text-neutral-600 dark:text-neutral-400 hover:bg-white/10 dark:hover:bg-white/5"
            }`}
            title="Projects"
          >
            <FolderOpen size={18} />
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavClick(e, "skills-section")}
            className={`p-2.5 rounded-full transition-all duration-300 ${
              activeLink === "skills-section"
                ? "bg-orange-500/20 text-orange-600 dark:text-orange-400"
                : "text-neutral-600 dark:text-neutral-400 hover:bg-white/10 dark:hover:bg-white/5"
            }`}
            title="Skills"
          >
            <Code size={18} />
          </a>
          <a
            href="#education"
            onClick={(e) => handleNavClick(e, "education-section")}
            className={`p-2.5 rounded-full transition-all duration-300 ${
              activeLink === "education-section"
                ? "bg-orange-500/20 text-orange-600 dark:text-orange-400"
                : "text-neutral-600 dark:text-neutral-400 hover:bg-white/10 dark:hover:bg-white/5"
            }`}
            title="Education"
          >
            <GraduationCap size={18} />
          </a>
          <a
            href="#activities"
            onClick={(e) => handleNavClick(e, "activities-section")}
            className={`p-2.5 rounded-full transition-all duration-300 ${
              activeLink === "activities-section"
                ? "bg-orange-500/20 text-orange-600 dark:text-orange-400"
                : "text-neutral-600 dark:text-neutral-400 hover:bg-white/10 dark:hover:bg-white/5"
            }`}
            title="Activities"
          >
            <Trophy size={18} />
          </a>
        </div>
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
