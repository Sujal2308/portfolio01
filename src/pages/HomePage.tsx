import { BlurFade } from "@/components/magicui/blur-fade";
import { Header } from "@/features/header";
import { Intro } from "@/features/intro";
import { Socials } from "@/features/socials";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container relative max-w-3xl px-10 mx-auto mt-10 mb-20 sm:mt-28 sm:mb-28">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-full border border-white/20 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-200"
      >
        <ArrowLeft size={18} />
        <span>Back to Home</span>
      </button>

      <div className="mb-12">
        <BlurFade delay={0} direction="up" blur="3px">
          <h1 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
            Home
          </h1>
        </BlurFade>
        <BlurFade delay={0} direction="up" blur="3px">
          <Header className="mb-6" />
        </BlurFade>
        <BlurFade delay={0} direction="up" blur="3px">
          <Intro />
        </BlurFade>
      </div>
      <div className="mb-12">
        <BlurFade delay={0} direction="up" blur="3px">
          <Socials />
        </BlurFade>
      </div>
    </div>
  );
}
