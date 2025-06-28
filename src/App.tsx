import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <div className="dark:bg-neutral-900 bg-neutral-200">
      <div className="flex items-center justify-center w-screen h-screen">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
