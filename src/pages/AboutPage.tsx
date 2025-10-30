import { BlurFade } from "@/components/magicui/blur-fade";
import { Header } from "@/features/header";
import { Intro } from "@/features/intro";
import { Socials } from "@/features/socials";
import { Now } from "@/features/now";

export function AboutPage() {
  return (
    <div className="container relative max-w-3xl px-10 mx-auto mt-10 mb-24 sm:mt-28 sm:mb-28">
      {/* Header and Intro Section */}
      <div className="mb-12">
        <BlurFade delay={0} direction="up" blur="3px">
          <Header className="mb-6" />
        </BlurFade>
        <BlurFade delay={0} direction="up" blur="3px">
          <Intro />
        </BlurFade>
      </div>

      {/* Socials Section */}
      <div className="mb-12">
        <BlurFade delay={0} direction="up" blur="3px">
          <Socials />
        </BlurFade>
      </div>

      {/* About Me Section */}
      <div className="mb-12">
        <BlurFade delay={0} direction="up" blur="3px">
          <h1 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
            About Me
          </h1>
        </BlurFade>
        <BlurFade delay={0} direction="up" blur="3px">
          <Now />
        </BlurFade>
      </div>
    </div>
  );
}
