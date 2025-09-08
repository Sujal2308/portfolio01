import { useState, useEffect } from "react";
import { ThemeToggle } from "@/features/header/components/ThemeToggle";

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
    <nav className="fixed top-0 left-0 w-full z-50 md:hidden">
      <div className="w-full flex justify-center bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200/40 dark:border-neutral-200/10 shadow-sm">
        <div className="w-full max-w-3xl flex items-center justify-between px-4 sm:px-6 py-2">
          <div className="flex gap-6 text-sm font-medium text-neutral-900 dark:text-neutral-100">
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects-section")}
              className={`underline-offset-8 ${
                activeLink === "projects-section"
                  ? "underline decoration-2 decoration-orange-500 font-bold"
                  : ""
              }`}
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "skills-section")}
              className={`underline-offset-8 ${
                activeLink === "skills-section"
                  ? "underline decoration-2 decoration-orange-500 font-bold"
                  : ""
              }`}
            >
              Skills
            </a>
            <a
              href="#education"
              onClick={(e) => handleNavClick(e, "education-section")}
              className={`underline-offset-8 ${
                activeLink === "education-section"
                  ? "underline decoration-2 decoration-orange-500 font-bold"
                  : ""
              }`}
            >
              Education
            </a>
            <a
              href="#activities"
              onClick={(e) => handleNavClick(e, "activities-section")}
              className={`underline-offset-8 ${
                activeLink === "activities-section"
                  ? "underline decoration-2 decoration-orange-500 font-bold"
                  : ""
              }`}
            >
              Activity
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
