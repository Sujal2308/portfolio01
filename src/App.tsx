import { Header } from "@/features/header";
import { Intro } from "@/features/intro";
import { Skills } from "@/features/skills";
import { Projects } from "@/features/projects";

function App() {
  return (
    <main className="text-zinc-700 dark:text-neutral-300">
      <article className="container max-w-3xl px-10 mx-auto mt-10 sm:mt-28">
        <div className="mb-6">
          <Header className="mb-6" />
          <Intro />
        </div>
        <div className="flex flex-col items-center w-full gap-8 mb-6 md:flex-row md:items-stretch">
          <Skills />
          <Projects />
        </div>
        <div className="mb-6">
          <h1 className="mb-6 text-xl font-semibold">Now</h1>
          <div className="font-mono">
            <p className="mb-6">
              Learning by doing, following what interests me, and trying to
              build things that feel solid and impactful. I try to stay aware
              that&nbsp;
              <span className="font-bold tracking-wider font-newsreader">
                everything around me is the result of someone else's time and
                effort.
              </span>
            </p>
            <p>
              Right now, I just want to code. I want to build things, try out
              new tools, dig deeper into the Linux ecosystem, and understand how
              things work under the hood. It's exciting to keep learning and see
              how all the pieces fit together.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
