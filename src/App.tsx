<div className="mb-12">
  <BlurFade delay={0.9} direction="up" blur="3px">
    <h1 className="mb-6 text-neutral-500 dark:text-neutral-400">Education</h1>
  </BlurFade>
  <BlurFade delay={0.95} direction="up" blur="3px">
    <Education />
  </BlurFade>
</div>;
import { useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";

import { FelixLottieSticky } from "@/components/internal/FelixLottieSticky";

import { Header } from "@/features/header";
import { Intro } from "@/features/intro";
import { Skills } from "@/features/skills";
import { Socials } from "@/features/socials";
import { Projects } from "@/features/projects";
import { Now } from "@/features/now";
import { TechSkills } from "@/features/tech-skills";
import { Education } from "@/features/education";
import { Activities } from "@/features/activities";
import { Contact } from "@/features/contact";
import { Footer } from "@/features/footer";
import { Grid3X3, Orbit } from "lucide-react";

// Add spinning animation for Orbit icon
const orbitSpinStyle = {
  animation: "orbitLogoSpin 1.5s linear infinite",
};

function App() {
  const [isOrbitView, setIsOrbitView] = useState(false);

  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-x-hidden">
      <DotPattern
        width={30}
        height={30}
        className="fixed inset-0 w-full h-full opacity-50 pointer-events-none dark:opacity-20 -z-10"
      />
      <main className="relative flex flex-col flex-1 text-zinc-700 dark:text-neutral-300">
        <article className="container relative max-w-3xl px-10 mx-auto mt-10 mb-10 sm:mt-28 sm:mb-28">
          <div className="mb-12">
            <BlurFade delay={0} direction="up" blur="3px">
              <Header className="mb-6" />
            </BlurFade>
            <BlurFade delay={0.15} direction="up" blur="3px">
              <Intro />
            </BlurFade>
          </div>
          <div className="mb-12">
            <BlurFade delay={0.3} direction="up" blur="3px">
              <Socials />
            </BlurFade>
          </div>
          <div className="flex flex-col items-center w-full gap-8 mb-12 md:flex-row md:items-center">
            {/* <BlurFade delay={0.3} direction="up" blur="3px">
              <Skills />
            </BlurFade> */}
            <BlurFade delay={0.45} direction="up" blur="3px">
              <Projects />
            </BlurFade>
          </div>
          <div className="mb-12">
            <BlurFade delay={0.8} direction="up" blur="3px">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-neutral-500 dark:text-neutral-400">
                  Tech Stack
                </h1>
                <button
                  onClick={() => setIsOrbitView(!isOrbitView)}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 dark:bg-black/10 border border-gray-200/20 dark:border-gray-700/30 hover:bg-white/10 dark:hover:bg-black/20 transition-colors duration-200"
                >
                  {isOrbitView ? (
                    <>
                      <Grid3X3
                        size={16}
                        className="animate-colorchange text-blue-500 dark:text-blue-400"
                      />
                      <span className="animate-colorchange text-blue-500 dark:text-blue-400">
                        Grid
                      </span>
                    </>
                  ) : (
                    <>
                      <Orbit
                        size={16}
                        style={orbitSpinStyle}
                        className="animate-colorchange text-fuchsia-500 dark:text-fuchsia-400"
                      />
                      <span className="animate-colorchange text-fuchsia-500 dark:text-fuchsia-400">
                        Orbit
                      </span>
                    </>
                  )}
                </button>
              </div>
            </BlurFade>
            <BlurFade delay={0.85} direction="up" blur="3px">
              <div className="w-full flex justify-center items-center">
                {isOrbitView ? <Skills /> : <TechSkills />}
              </div>
            </BlurFade>
          </div>
          <div className="mb-12">
            <BlurFade delay={1.0} direction="up" blur="3px">
              <h1 className="mb-6 text-neutral-500 dark:text-neutral-400">
                Now
              </h1>
            </BlurFade>
            <BlurFade delay={1.05} direction="up" blur="3px">
              <Now />
            </BlurFade>
          </div>
          <div className="mb-12">
            <BlurFade delay={1.1} direction="up" blur="3px">
              <h1 className="mb-6 text-neutral-500 dark:text-neutral-400">
                Education
              </h1>
            </BlurFade>
            <BlurFade delay={1.15} direction="up" blur="3px">
              <Education />
            </BlurFade>
          </div>
          <div className="mb-12">
            <BlurFade delay={1.0} direction="up" blur="3px">
              <Activities />
            </BlurFade>
          </div>
          <div>
            <BlurFade delay={1.05} direction="up" blur="3px">
              <h1 className="mb-6 text-xl font-semibold">Contact</h1>
            </BlurFade>
            <BlurFade delay={1.1} direction="up" blur="3px">
              <Contact />
            </BlurFade>
          </div>
        </article>
        <FelixLottieSticky />
      </main>
      <Footer />
    </div>
  );
}
export default App;
