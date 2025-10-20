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
  const [currentCard, setCurrentCard] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Minimum distance for a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentCard < educationData.length - 1) {
      setCurrentCard(currentCard + 1);
    }
    if (isRightSwipe && currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  const nextCard = () => {
    if (currentCard < educationData.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  return (
    <div className={className} ref={sectionRef}>
      {/* Mobile Progress Line */}
      <div className="md:hidden relative">
        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentCard * 100}%)` }}
          >
            {educationData.map((edu, index) => {
              const isFlipped = flipped === index;
              return (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="perspective cursor-pointer relative">
                    <div
                      className={`relative transition-transform duration-700 preserve-3d ${
                        isFlipped ? "rotate-y-180" : ""
                      }`}
                      onClick={() => setFlipped(isFlipped ? null : index)}
                    >
                      {/* Front Side */}
                      <div className="p-4 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-lg border border-white/20 dark:border-white/10 transition-colors duration-200 shadow-lg backface-hidden">
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
                            {/* Flip Icon */}
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

                      {/* Back Side */}
                      <div className="absolute inset-0 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-lg border border-white/20 dark:border-white/10 transition-colors duration-200 shadow-lg backface-hidden rotate-y-180 flex items-center justify-center">
                        <div className="w-full relative">
                          <div className="text-black dark:text-white text-sm leading-relaxed whitespace-pre-line font-mono font-bold space-y-2">
                            {edu.description &&
                              edu.description.split("\n").map((line, idx) => (
                                <div
                                  key={idx}
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Horizontal Progress Bar */}
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-2">
            {educationData.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentCard
                    ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                    : "w-4 bg-gray-300/40 dark:bg-gray-600/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons (optional) */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevCard}
            disabled={currentCard === 0}
            className={`p-2 rounded-full transition-all duration-200 ${
              currentCard === 0
                ? "opacity-30 cursor-not-allowed"
                : "opacity-70 hover:opacity-100 bg-white/10 dark:bg-white/5 backdrop-blur-lg"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={nextCard}
            disabled={currentCard === educationData.length - 1}
            className={`p-2 rounded-full transition-all duration-200 ${
              currentCard === educationData.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "opacity-70 hover:opacity-100 bg-white/10 dark:bg-white/5 backdrop-blur-lg"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 6 15 12 9 18"></polyline>
            </svg>
          </button>
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
