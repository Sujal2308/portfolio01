import { useState, useEffect } from "react";
import { ThemeToggle } from "@/features/header/components/ThemeToggle";
import { FolderOpen, Code, GraduationCap, Trophy, ArrowUp } from "lucide-react";

export function StickyNav() {
  const [activeLink, setActiveLink] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Update active link based on scroll position and show scroll to top
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "projects-section",
        "skills-section",
        "education-section",
        "activities-section",
      ];
      const scrollPosition = window.scrollY + 100; // Add offset for navbar height
      const currentScrollY = window.scrollY;

      // Show scroll to top button when scrolled down
      setShowScrollTop(currentScrollY > 200);

      // Check if user is near the bottom of the page
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearBottom =
        currentScrollY + windowHeight >= documentHeight - 100;

      // Hide navbar when near bottom, show when scrolling up
      if (isNearBottom) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down after some scroll
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);

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

  // Scroll to top handler
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden transition-all duration-500 ease-in-out ${
        showNavbar ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3 px-5 py-3 bg-white/10 dark:bg-black/15 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-full shadow-2xl">
        <div className="flex gap-2">
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

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            className="p-2 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/30 transition-all duration-300"
            title="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        )}

        <div className="ml-3">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
