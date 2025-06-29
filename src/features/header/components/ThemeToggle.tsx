import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative cursor-pointer group"
    >
      <Sun className="w-5 h-5 transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90 group-hover:scale-0 group-hover:-rotate-90 group-hover:dark:scale-100 group-hover:dark:rotate-0" />
      <Moon className="absolute w-5 h-5 transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0 group-hover:scale-100 group-hover:rotate-0 group-hover:dark:scale-0 group-hover:dark:-rotate-90" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
