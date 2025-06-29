import { Header } from "@/features/header";
import { Intro } from "@/features/intro";

function App() {
  return (
    <main className="text-zinc-700 dark:text-neutral-300">
      <article className="container max-w-2xl px-4 mx-auto mt-10 sm:mt-28">
        <div>
          <Header className="mb-6" />
          <Intro className="mb-6" />
        </div>
      </article>
    </main>
  );
}

export default App;
