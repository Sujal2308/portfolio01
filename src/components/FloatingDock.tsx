import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  FolderOpen,
  Code,
  GraduationCap,
  Trophy,
  User,
} from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function FloatingDock() {
  const [activeSection, setActiveSection] = useState("intro");
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // Navigation items configuration
  const navItems = [
    {
      id: "intro",
      label: "About Me",
      icon: User,
      sectionId: null, // Will scroll to top
    },
    {
      id: "projects",
      label: "Projects",
      icon: FolderOpen,
      sectionId: "projects-section",
    },
    {
      id: "skills",
      label: "Skills",
      icon: Code,
      sectionId: "skills-section",
    },
    {
      id: "education",
      label: "Education",
      icon: GraduationCap,
      sectionId: "education-section",
    },
    {
      id: "activities",
      label: "Activities",
      icon: Trophy,
      sectionId: "activities-section",
    },
  ];

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.filter((item) => item.sectionId);
      const scrollPosition = window.scrollY + 100;

      if (scrollPosition < 200) {
        setActiveSection("intro");
        return;
      }

      for (const item of sections) {
        const element = document.getElementById(item.sectionId!);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(item.id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string | null) => {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-2 p-3 rounded-full bg-white/5 dark:bg-black/10 backdrop-blur-xl border border-white/10 dark:border-white/5 shadow-2xl shadow-black/10 dark:shadow-white/5">
        {/* Navigation Icons */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.sectionId)}
              className={`relative group p-3 rounded-full transition-all duration-500 ease-out ${
                isActive
                  ? "bg-blue-500/15 dark:bg-blue-400/15 text-blue-600 dark:text-blue-400"
                  : "hover:bg-white/10 dark:hover:bg-white/5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
              } hover:scale-125 hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20`}
              aria-label={item.label}
            >
              <Icon size={18} className="transition-all duration-300" />

              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-black/90 dark:bg-white/95 text-white dark:text-black text-xs rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none backdrop-blur-sm border border-white/10 dark:border-black/10">
                {item.label}
              </div>
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent my-1" />

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="group p-3 rounded-full transition-all duration-500 ease-out hover:bg-white/10 dark:hover:bg-white/5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:scale-125 hover:shadow-lg hover:shadow-amber-500/20 dark:hover:shadow-amber-400/20"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
            <Sun size={18} className="transition-all duration-300" />
          ) : (
            <Moon size={18} className="transition-all duration-300" />
          )}

          {/* Tooltip */}
          <div className="absolute left-full ml-4 px-3 py-1.5 bg-black/90 dark:bg-white/95 text-white dark:text-black text-xs rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none backdrop-blur-sm border border-white/10 dark:border-black/10">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </div>
        </button>
      </div>
    </div>
  );
}
