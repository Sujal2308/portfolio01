import { useState, useRef, useEffect } from "react";

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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Minimum distance for a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY); // Changed to clientY for vertical
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY); // Changed to clientY for vertical
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance; // Up swipe = next card
    const isDownSwipe = distance < -minSwipeDistance; // Down swipe = previous card

    if (isUpSwipe && currentCard < educationData.length - 1) {
      setCurrentCard(currentCard + 1);
    }
    if (isDownSwipe && currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  // Scroll detection for education cards
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const currentScrollY = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionBottom = sectionTop + sectionRef.current.offsetHeight;

      // Check if we're in the education section
      if (
        currentScrollY >= sectionTop - 200 &&
        currentScrollY <= sectionBottom + 200
      ) {
        setIsScrolling(true);

        // Determine scroll direction
        const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";

        // Clear previous timeout
        if (scrollTimeout) clearTimeout(scrollTimeout);

        // Set new timeout for scroll end detection
        scrollTimeout = setTimeout(() => {
          if (
            scrollDirection === "down" &&
            currentCard < educationData.length - 1
          ) {
            setCurrentCard((prev) =>
              Math.min(prev + 1, educationData.length - 1)
            );
          } else if (scrollDirection === "up" && currentCard > 0) {
            setCurrentCard((prev) => Math.max(prev - 1, 0));
          }
          setIsScrolling(false);
        }, 150); // Throttle scroll events
      }

      setLastScrollY(currentScrollY);
    };

    // Only add scroll listener on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, currentCard, isScrolling]);

  return (
    <div className={className} ref={sectionRef}>
      {/* Mobile Vertical Scrolling */}
      <div className="md:hidden relative">
        {/* Vertical Progress Bar - Left Side */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
          <div className="flex flex-col space-y-2">
            {educationData.map((_, index) => (
              <div
                key={index}
                className={`w-1 rounded-full transition-all duration-300 ${
                  index === currentCard
                    ? "h-8 bg-gradient-to-b from-blue-500 to-purple-500"
                    : "h-4 bg-gray-300/40 dark:bg-gray-600/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Vertical Carousel Container */}
        <div
          className="relative overflow-hidden h-96 py-4"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex flex-col transition-transform duration-300 ease-out h-full"
            style={{ transform: `translateY(-${currentCard * 100}%)` }}
          >
            {educationData.map((edu, index) => {
              return (
                <div key={index} className="h-full flex-shrink-0 px-8 py-2">
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
