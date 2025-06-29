import { Header } from "@/features/header";
import { Intro } from "@/features/intro";
import { Skills } from "@/features/skills";
import { Projects } from "@/features/projects";

function App() {
  return (
    <main className="text-zinc-700 dark:text-neutral-300">
      <article className="container max-w-3xl px-10 mx-auto mt-10 sm:mt-28">
        <div>
          <Header className="mb-6" />
          <Intro className="mb-6" />
          <div className="flex flex-col items-center w-full gap-8 md:flex-row md:items-stretch">
            <Skills />
            <Projects />
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
