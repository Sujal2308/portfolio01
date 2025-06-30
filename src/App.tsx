import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";

import { Header } from "@/features/header";
import { Intro } from "@/features/intro";
import { Skills } from "@/features/skills";
import { Projects } from "@/features/projects";
import { Now } from "@/features/now";
import { Contact } from "@/features/contact";

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <DotPattern
        width={30}
        height={30}
        className="fixed inset-0 w-full h-full opacity-50 pointer-events-none dark:opacity-20 -z-10"
      />
      <main className="text-zinc-700 dark:text-neutral-300">
        <article className="container max-w-3xl px-10 mx-auto mt-10 mb-10 sm:mt-28 sm:mb-28">
          <div className="mb-12">
            <BlurFade delay={0} direction="up" blur="3px">
              <Header className="mb-6" />
            </BlurFade>
            <BlurFade delay={0.15} direction="up" blur="3px">
              <Intro />
            </BlurFade>
          </div>
          <div className="flex flex-col items-center w-full gap-8 mb-12 md:flex-row md:items-stretch">
            <BlurFade delay={0.3} direction="up" blur="3px">
              <Skills />
            </BlurFade>
            <BlurFade delay={0.45} direction="up" blur="3px">
              <Projects />
            </BlurFade>
          </div>
          <div className="mb-12">
            <BlurFade delay={0.6} direction="up" blur="3px">
              <h1 className="mb-6 text-xl font-semibold">Now</h1>
            </BlurFade>
            <BlurFade delay={0.75} direction="up" blur="3px">
              <Now />
            </BlurFade>
          </div>
          <div>
            <BlurFade delay={0.9} direction="up" blur="3px">
              <h1 className="mb-6 text-xl font-semibold">Connect</h1>
            </BlurFade>
            <BlurFade delay={1.05} direction="up" blur="3px">
              <Contact />
            </BlurFade>
          </div>
        </article>
      </main>
      <footer className="py-4 text-sm border-t border-zinc-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 bg-background">
        <div className="container flex justify-between max-w-3xl px-10 mx-auto">
          <p>Sebilune</p>
          <p>2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
