import { useState, useRef } from "react";

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
      "• Learning modern technologies and system design\n• Active in coding competitions and tech events",
  },
  {
    institution: "Shri Shivaji Multipurpose Jr. College, Amravati",
    degree: "HSC in PCM",
    location: "Amravati, Maharashtra",
    period: "2022",
    logo: "student-svgrepo-com.svg",
    description:
      "• Strong foundation in Physics, Chemistry, Mathematics\n• Developed analytical and problem-solving skills",
  },
  {
    institution: "Golden Kids English High School, Amravati",
    degree: "SSC",
    location: "Amravati, Maharashtra",
    period: "2020",
    logo: "student-svgrepo-com.svg",
    description:
      "• Completed with distinction\n• Built fundamental academic skills",
  },
];

export function Education({ className }: EducationProps) {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [currentCard, setCurrentCard] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Navigation functions
  const goToNextCard = () => {
    if (currentCard < educationData.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  const goToPrevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  return (
    <div className={className} ref={sectionRef}>
      {/* Mobile Simple Navigation */}
      <div className="md:hidden relative">
        {/* Navigation Controls - Right Side */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center space-y-4">
          {/* Counter */}
          <div className="bg-amber-400/80 dark:bg-amber-500/70 backdrop-blur-md rounded-full px-3 py-1 text-gray-900 dark:text-white text-sm font-medium border border-amber-300/50 dark:border-amber-400/40 shadow-lg">
            {currentCard + 1}/{educationData.length}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col space-y-2">
            <button
              onClick={goToPrevCard}
              disabled={currentCard === 0}
              className={`p-2 rounded-full backdrop-blur-md transition-all duration-200 border shadow-lg ${
                currentCard === 0
                  ? "bg-gray-400/30 dark:bg-gray-600/40 text-gray-500 dark:text-gray-400 cursor-not-allowed border-gray-400/30 dark:border-gray-600/40"
                  : "bg-white/30 dark:bg-white/20 text-gray-800 dark:text-white hover:bg-white/40 dark:hover:bg-white/30 active:scale-95 border-white/40 dark:border-white/20"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>

            <button
              onClick={goToNextCard}
              disabled={currentCard === educationData.length - 1}
              className={`p-2 rounded-full backdrop-blur-md transition-all duration-200 border shadow-lg ${
                currentCard === educationData.length - 1
                  ? "bg-gray-400/30 dark:bg-gray-600/40 text-gray-500 dark:text-gray-400 cursor-not-allowed border-gray-400/30 dark:border-gray-600/40"
                  : "bg-white/30 dark:bg-white/20 text-gray-800 dark:text-white hover:bg-white/40 dark:hover:bg-white/30 active:scale-95 border-white/40 dark:border-white/20"
              }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Card Display Container */}
        <div className="relative overflow-hidden h-96 py-4">
          <div
            className="flex flex-col transition-transform duration-300 ease-out h-full"
            style={{ transform: `translateY(-${currentCard * 100}%)` }}
          >
            {educationData.map((edu, index) => {
              return (
                <div
                  key={index}
                  className="h-full flex-shrink-0 px-2 py-2 pr-16"
                >
                  <div className="relative h-full">
                    <div className="h-full">
                      {/* Mobile: Single card with description included */}
                      <div className="p-4 sm:p-5 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-white/10 transition-colors duration-200 shadow-2xl h-full flex flex-col justify-between">
                        <div className="flex flex-col space-y-4">
                          {/* Header Section */}
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                                {edu.institution}
                              </h3>
                              <p className="text-zinc-700 dark:text-zinc-300 font-medium mt-1 font-mono text-base">
                                {edu.degree}
                              </p>
                            </div>
                          </div>

                          {/* Description Section */}
                          <div className="flex-1">
                            <div className="text-zinc-800 dark:text-zinc-200 text-sm leading-relaxed whitespace-pre-line font-mono space-y-2">
                              {edu.description &&
                                edu.description.split("\n").map((line, idx) => (
                                  <div
                                    key={idx}
                                    className={line.trim() ? "mb-1" : "h-1"}
                                  >
                                    {line}
                                  </div>
                                ))}
                            </div>
                          </div>

                          {/* Footer Section */}
                          <div className="flex justify-between items-end mt-auto">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                              {edu.location}
                            </p>
                            <div className="flex flex-col items-end">
                              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 font-mono">
                                {edu.period}
                              </span>
                              {edu.status && (
                                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium font-mono">
                                  {edu.status}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
                    <div
                      className={`text-black dark:text-white text-sm leading-relaxed whitespace-pre-line font-mono font-bold space-y-2 transition-all duration-500 ${
                        isFlipped
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      {edu.description &&
                        edu.description.split("\n").map((line, lineIndex) => (
                          <div
                            key={lineIndex}
                            className={`${
                              line.trim() ? "" : "h-2"
                            } transition-all duration-500 ${
                              isFlipped
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-2"
                            }`}
                            style={{ transitionDelay: `${lineIndex * 100}ms` }}
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
