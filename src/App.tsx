import { ThemeProvider } from "@/providers/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex items-center justify-center w-screen h-screen">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
