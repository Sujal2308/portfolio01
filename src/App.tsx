import { BlurFade } from "@/components/magicui/blur-fade";

import { Header } from "@/features/header";
import { Intro } from "@/features/intro";
import { Skills } from "@/features/skills";
import { Projects } from "@/features/projects";
import { Now } from "@/features/now";

function App() {
  return (
    <main className="text-zinc-700 dark:text-neutral-300">
      <article className="container max-w-3xl px-10 mx-auto mt-10 sm:mt-28">
        <div className="mb-12">
          <BlurFade delay={0}>
            <Header className="mb-6" />
          </BlurFade>
          <BlurFade delay={0.2}>
            <Intro />
          </BlurFade>
        </div>
        <div className="flex flex-col items-center w-full gap-8 mb-12 md:flex-row md:items-stretch">
          <BlurFade delay={0.4}>
            <Skills />
          </BlurFade>
          <BlurFade delay={0.6}>
            <Projects />
          </BlurFade>
        </div>
        <div className="mb-6">
          <BlurFade delay={0.7}>
            <h1 className="mb-6 text-xl font-semibold">Now</h1>
          </BlurFade>
          <BlurFade delay={0.8}>
            <Now />
          </BlurFade>
        </div>
      </article>
    </main>
  );
}

export default App;
