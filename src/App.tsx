import { Header } from "@/features/header";
import { Intro } from "@/features/intro";
import { Skills } from "@/features/skills";

function App() {
  return (
    <main className="text-zinc-700 dark:text-neutral-300">
      <article className="container max-w-3xl px-10 mx-auto mt-10 sm:mt-28">
        <div>
          <Header className="mb-6" />
          <Intro className="mb-6" />
          <Skills />
        </div>
      </article>
    </main>
  );
}

export default App;
