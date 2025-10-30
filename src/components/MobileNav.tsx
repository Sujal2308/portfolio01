import {
  FolderOpen,
  Code,
  GraduationCap,
  Trophy,
  MessageCircle,
  User,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/features/header/components/ThemeToggle";

export function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      path: "/",
      icon: User,
      title: "Home",
    },
    {
      path: "/projects",
      icon: FolderOpen,
      title: "Projects",
    },
    {
      path: "/skills",
      icon: Code,
      title: "Skills",
    },
    {
      path: "/education",
      icon: GraduationCap,
      title: "Education",
    },
    {
      path: "/activities",
      icon: Trophy,
      title: "Activities",
    },
    {
      path: "/contact",
      icon: MessageCircle,
      title: "Contact",
    },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full flex justify-center py-4 bg-gradient-to-t from-white/90 to-transparent dark:from-black/90 dark:to-transparent backdrop-blur-lg z-50 md:hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/10 dark:bg-black/15 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-full shadow-2xl">
        <div className="flex gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-orange-500/20 text-orange-600 dark:text-orange-400 scale-110 -translate-y-1"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-white/10 dark:hover:bg-white/5"
                }`}
                title={item.title}
              >
                <Icon size={16} />
              </button>
            );
          })}
        </div>

        <div className="ml-2 pl-2 border-l border-white/20 dark:border-white/10">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
