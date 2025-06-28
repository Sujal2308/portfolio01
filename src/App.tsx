import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen dark:bg-neutral-800 bg-neutral-300 text-neutral-800 dark:text-neutral-300">
      <div className="container max-w-2xl px-4 mx-auto pt-28">
        <header className="flex items-center justify-between p-4">
          <h1 className="text-lg font-medium">Sebi</h1>
          <ThemeToggle />
        </header>
        {/* Content below header */}
      </div>
    </div>
  );
}

export default App;
