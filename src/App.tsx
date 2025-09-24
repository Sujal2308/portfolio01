import { useState, useEffect, useRef } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { BoxReveal } from "@/components/magicui/box-reveal";

import { FelixLottieSticky } from "@/components/internal/FelixLottieSticky";
import { StickyNav } from "@/components/StickyNav";

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
import { Grid3X3, Orbit, ArrowUp } from "lucide-react";

// Add spinning animation for Orbit icon
const orbitSpinStyle = {
  animation: "orbitLogoSpin 1.5s linear infinite",
};

function App() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [isOrbitView, setIsOrbitView] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      const header = document.querySelector("header");
      const headerBottom = header ? header.getBoundingClientRect().bottom : 0;
      setShowStickyNav(headerBottom <= 0);
      if (window.scrollY > 100) {
        setShowScrollTop(true);
        setScrolled(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => setScrolled(false), 1200);
      } else {
        setShowScrollTop(false);
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for Footer
    const observer = new window.IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-x-hidden">
      {showStickyNav && <StickyNav />}
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
          <div
            id="projects-section"
            className="flex flex-col items-center w-full gap-8 mb-12 md:flex-row md:items-center scroll-mt-20 md:scroll-mt-24"
          >
            <BlurFade delay={0.45} direction="up" blur="3px">
              <Projects />
            </BlurFade>
          </div>
          <div
            id="skills-section"
            className="mb-12 scroll-mt-20 md:scroll-mt-24"
          >
            <BlurFade delay={0.8} direction="up" blur="3px">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-neutral-500 dark:text-neutral-400">
                  Tech Stack
                </h1>
                <BoxReveal boxColor="#0ea5e9" width="fit-content" delay={0.1}>
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
            <div
              id="education-section"
              className="scroll-mt-20 md:scroll-mt-24"
            >
              <BlurFade delay={1.1} direction="up" blur="3px">
                <h1 className="mb-6 text-neutral-500 dark:text-neutral-400">
                  Education
                </h1>
              </BlurFade>
            </div>
            <BlurFade delay={1.15} direction="up" blur="3px">
              <Education />
            </BlurFade>
          </div>
          <div
            id="activities-section"
            className="mb-12 scroll-mt-20 md:scroll-mt-24"
          >
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
      <div ref={footerRef}>
        <Footer />
      </div>

      {/* Scroll to top button (always visible, fades in/out) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-6 z-50 p-3 rounded-full bg-blue-500/90 sm:hover:bg-blue-600 text-white shadow-lg transition-all duration-500 flex items-center justify-center
          ${
            showScrollTop
              ? scrolled
                ? "opacity-100"
                : "opacity-80"
              : "opacity-0 pointer-events-none"
          }`}
        aria-label="Scroll to top"
        style={{
          transitionProperty: "opacity, background-color, bottom",
          bottom: footerVisible ? "80px" : "24px",
        }}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
export default App;
