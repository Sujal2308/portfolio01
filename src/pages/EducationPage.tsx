import { BlurFade } from "@/components/magicui/blur-fade";
import { Education } from "@/features/education";

export function EducationPage() {
  return (
    <div className="container relative max-w-3xl px-10 mx-auto mt-10 mb-24 sm:mt-28 sm:mb-28">
      <div className="mb-12">
        <BlurFade delay={0} direction="up" blur="3px">
          <h1 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
            Education
          </h1>
        </BlurFade>
        <BlurFade delay={0} direction="up" blur="3px">
          <Education />
        </BlurFade>
      </div>
    </div>
  );
}
