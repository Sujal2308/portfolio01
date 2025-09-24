import { useState } from "react";

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
    degree: "B.E in Computer Science and Engineering",
    location: "Amravati, Maharashtra, INDIA",
    period: "Jun-2026",
    status: "",
    logo: "student-svgrepo-com.svg",
    description:
      "• 💻 Focused on software development and algorithms\n• 🚀 Learning modern technologies and system design\n• 🏆 Active in coding competitions and tech events",
  },
  {
    institution: "Shri Shivaji Multipurpose Jr. College, Amravati",
    degree: "HSC in PCM",
    location: "Amravati, Maharashtra",
    period: "Feb-2022",
    logo: "student-svgrepo-com.svg",
    description:
      "• 📚 Strong foundation in Physics, Chemistry, Mathematics\n• 🧠 Developed analytical and problem-solving skills",
  },
  {
    institution: "Golden Kids English High School, Amravati",
    degree: "SSC",
    location: "Amravati, Maharashtra",
    period: "Mar-2020",
    logo: "student-svgrepo-com.svg",
    description:
      "• 🎓 Completed with distinction\n• 🏫 Built fundamental academic skills",
  },
];

export function Education({ className }: EducationProps) {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className={className}>
      <div className="space-y-6">
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
                <div className="p-4 bg-[rgba(186,230,253,0.25)] dark:bg-black/10 rounded-lg border border-gray-200/20 dark:border-gray-700/30 transition-colors duration-200 shadow-lg backface-hidden">
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
                        <div className="relative inline-block overflow-hidden group">
                          {/* Background reveal animation */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 transition-all duration-500 ease-out scale-x-0 group-hover:scale-x-100 origin-left rounded-sm -mx-1 -my-0.5" />
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
                        {/* Flip Icon: Only show on mobile, now right arrow */}
                        <div className="sm:hidden absolute -right-2 -bottom-1">
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
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 p-4 bg-[rgba(186,230,253,0.25)] dark:bg-black/10 rounded-lg border border-gray-200/20 dark:border-gray-700/30 transition-colors duration-200 shadow-lg backface-hidden rotate-y-180 flex items-center justify-center">
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
