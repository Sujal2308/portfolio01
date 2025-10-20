import { useState, useEffect, useRef } from "react";

interface EducationProps {
  className?: string;
}

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  status?: string;
  logo: string;
  description?: string;
}

const educationData: EducationItem[] = [
  {
    institution: "P R Pote Engineering and Management, Amravati",
    degree: "B.E in CSE",
    location: "Amravati, Maharashtra, INDIA",
    period: "2026",
    status: "",
    logo: "student-svgrepo-com.svg",
    description:
      "• 💻 Focused on software development and algorithms\n• 🚀 Learning modern technologies and system design\n• 🏆 Active in coding competitions and tech events",
  },
  {
    institution: "Shri Shivaji Multipurpose Jr. College, Amravati",
    degree: "HSC in PCM",
    location: "Amravati, Maharashtra",
    period: "2022",
    logo: "student-svgrepo-com.svg",
    description:
      "• 📚 Strong foundation in Physics, Chemistry, Mathematics\n• 🧠 Developed analytical and problem-solving skills",
  },
  {
    institution: "Golden Kids English High School, Amravati",
    degree: "SSC",
    location: "Amravati, Maharashtra",
    period: "2020",
    logo: "student-svgrepo-com.svg",
    description:
      "• 🎓 Completed with distinction\n• 🏫 Built fundamental academic skills",
  },
];

export function Education({ className }: EducationProps) {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;

        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate progress based on section visibility
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        // Progress starts when section enters viewport and completes when it fully exits
        const startProgress = windowHeight;
        const endProgress = -sectionHeight + 100; // Add buffer to complete before section fully exits

        // Alternative: Complete when section is mostly scrolled through
        const progress = Math.max(
          0,
          Math.min(
            1,
            (startProgress - sectionTop) / (startProgress - endProgress)
          )
        );

        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className={className} ref={sectionRef}>
      {/* Mobile Progress Line */}
      <div className="md:hidden relative">
        {/* Background line */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300/40 dark:bg-gray-600/40 rounded-full"></div>

        {/* Progress fill */}
        <div
          className="absolute left-2 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out will-change-transform"
          style={{
            height: `${scrollProgress * 100}%`,
            transform: "translateZ(0)", // Hardware acceleration
          }}
        ></div>

        {/* Content with left padding */}
        <div className="pl-8 space-y-6">
          {educationData.map((edu, index) => {
            const isFlipped = flipped === index;
            return (
              <div
                key={index}
                className="perspective cursor-pointer relative"
                onClick={() => setFlipped(isFlipped ? null : index)}
              >
                {/* Checkpoint number positioned at card center left */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-white dark:bg-gray-800 border-2 border-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400 shadow-lg z-10">
                  {index + 1}
                </div>
                <div
                  className={`relative transition-transform duration-700 preserve-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Side */}
                  <div className="p-4 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-lg border border-white/20 dark:border-white/10 transition-colors duration-200 shadow-lg backface-hidden">
                    {/* Mobile Layout - No Icon, Full Width Content */}
                    <div className="md:hidden">
                      <div className="flex flex-col space-y-3">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 cursor-default">
                              {edu.institution}
                            </h3>
                            <p className="text-zinc-700 dark:text-zinc-300 font-medium mt-1 font-mono">
                              {edu.degree}
                            </p>
                          </div>
                          {/* Flip Icon: Mobile only */}
                          <div className="flex-shrink-0 ml-2">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#ff6347"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex justify-between items-end">
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                            {edu.location}
                          </p>
                          <div className="flex flex-col items-end">
                            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 font-mono">
                              {edu.period}
                            </span>
                            {edu.status && (
                              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium font-mono">
                                {edu.status}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout - With Icon */}
                    <div className="hidden md:flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <img
                          src={`/svg/logos/${edu.logo}`}
                          alt="Education"
                          className="w-10 h-10 object-contain mt-2"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div>
                          <div className="relative inline-block overflow-hidden">
                            {/* Background - always visible */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-sm -mx-1 -my-0.5" />
                            <h3 className="relative font-semibold text-lg text-zinc-900 dark:text-zinc-100 cursor-default">
                              {edu.institution}
                            </h3>
                          </div>
                          <p className="text-zinc-700 dark:text-zinc-300 font-medium mt-1 font-mono">
                            {edu.degree}
                          </p>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                            {edu.location}
                          </p>
                        </div>
                        <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0 relative">
                          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 font-mono">
                            {edu.period}
                            {edu.status && (
                              <span className="ml-2 text-xs text-blue-600 dark:text-blue-400 font-medium sm:hidden font-mono">
                                {edu.status}
                              </span>
                            )}
                          </span>
                          {edu.status && (
                            <span className="hidden sm:block text-xs text-blue-600 dark:text-blue-400 font-medium font-mono">
                              {edu.status}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-lg border border-white/20 dark:border-white/10 transition-colors duration-200 shadow-lg backface-hidden rotate-y-180 flex items-center justify-center">
                    <div className="w-full relative">
                      <div className="text-black dark:text-white text-sm leading-relaxed whitespace-pre-line font-mono font-bold space-y-2">
                        {edu.description &&
                          edu.description.split("\n").map((line, index) => (
                            <div
                              key={index}
                              className={line.trim() ? "" : "h-2"}
                            >
                              {line}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Layout - no progress line */}
      <div className="hidden md:block space-y-6">
        {educationData.map((edu, index) => {
          const isFlipped = flipped === index;
          return (
            <div
              key={index}
              className="perspective cursor-pointer"
              onClick={() => setFlipped(isFlipped ? null : index)}
            >
              <div
                className={`relative transition-transform duration-700 preserve-3d ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div className="p-4 bg-[rgba(186,230,253,0.25)] dark:bg-black/50 rounded-lg border border-gray-200/20 dark:border-gray-700/30 transition-colors duration-200 shadow-lg backface-hidden">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <img
                        src={`/svg/logos/${edu.logo}`}
                        alt="Education"
                        className="w-10 h-10 object-contain mt-2"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <div className="relative inline-block overflow-hidden">
                          {/* Background - always visible */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-sm -mx-1 -my-0.5" />
                          <h3 className="relative font-semibold text-lg text-zinc-900 dark:text-zinc-100 cursor-default">
                            {edu.institution}
                          </h3>
                        </div>
                        <p className="text-zinc-700 dark:text-zinc-300 font-medium mt-1 font-mono">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                          {edu.location}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0 relative">
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 font-mono">
                          {edu.period}
                          {edu.status && (
                            <span className="ml-2 text-xs text-blue-600 dark:text-blue-400 font-medium sm:hidden font-mono">
                              {edu.status}
                            </span>
                          )}
                        </span>
                        {edu.status && (
                          <span className="hidden sm:block text-xs text-blue-600 dark:text-blue-400 font-medium font-mono">
                            {edu.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 p-4 bg-[rgba(186,230,253,0.25)] dark:bg-black/50 rounded-lg border border-gray-200/20 dark:border-gray-700/30 transition-colors duration-200 shadow-lg backface-hidden rotate-y-180 flex items-center justify-center">
                  <div className="w-full relative">
                    <div className="text-black dark:text-white text-sm leading-relaxed whitespace-pre-line font-mono font-bold space-y-2">
                      {edu.description &&
                        edu.description.split("\n").map((line, index) => (
                          <div key={index} className={line.trim() ? "" : "h-2"}>
                            {line}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .perspective {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
