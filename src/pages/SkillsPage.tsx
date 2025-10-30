import { useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Skills } from "@/features/skills";
import { TechSkills } from "@/features/tech-skills";
import { Grid3X3, Orbit } from "lucide-react";

// Add spinning animation for Orbit icon
const orbitSpinStyle = {
  animation: "orbitLogoSpin 1.5s linear infinite",
};

export function SkillsPage() {
  const [isOrbitView, setIsOrbitView] = useState(false);

  return (
    <div className="container relative max-w-3xl px-10 mx-auto mt-10 mb-24 sm:mt-28 sm:mb-28">
      <div className="mb-12">
        <BlurFade delay={0} direction="up" blur="3px">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              Tech Stack
            </h1>
            <BoxReveal boxColor="#0ea5e9" width="fit-content" delay={0}>
              <button
                onClick={() => setIsOrbitView(!isOrbitView)}
                className={
                  `flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full bg-white/5 dark:bg-black/10 border transition-colors duration-300 ` +
                  (isOrbitView
                    ? "border-blue-500 dark:border-blue-400 sm:hover:border-blue-400"
                    : "border-fuchsia-500 dark:border-fuchsia-400 sm:hover:border-fuchsia-400")
                }
              >
                {isOrbitView ? (
                  <>
                    <Grid3X3
                      size={16}
                      className="animate-colorchange text-blue-500 dark:text-blue-400"
                    />
                    <span className="animate-colorchange text-blue-500 dark:text-blue-400 font-bold">
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
                    <span className="animate-colorchange text-fuchsia-500 dark:text-fuchsia-400 font-bold">
                      Orbit
                    </span>
                  </>
                )}
              </button>
            </BoxReveal>
          </div>
        </BlurFade>
        <BlurFade delay={0} direction="up" blur="3px">
          <div className="w-full flex justify-center items-center">
            {isOrbitView ? <Skills /> : <TechSkills />}
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
