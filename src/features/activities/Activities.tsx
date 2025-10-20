import { BlurFade } from "@/components/magicui/blur-fade";
import {
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState, useRef } from "react";

interface ActivitiesProps {
  className?: string;
}

interface Activity {
  title: string;
  description: string;
  logo: string;
  highlight?: string;
  certifications?: Array<{
    name: string;
    url: string;
    color: "pink" | "lime" | "cyan" | "purple" | "orange";
  }>;
}

const activities: Activity[] = [
  {
    title: "Hackathon Participation",
    description:
      "Participated in more than 6 hackathons across various domains",
    logo: "Hacakathon.svg",
    highlight: "<b>1 Win, 2 Finalist</b>",
  },
  {
    title: "Certifications",
    description: "Completed multiple industry-recognized certifications",
    logo: "certificate-quality-award-education-medal-svgrepo-com.svg",
    certifications: [
      {
        name: "Java",
        url: "https://www.linkedin.com/learning/certificates/598a4d50a966de32844da956991d4e7ee976a6d5fe071aaebbde04b0e317de12?trk=share_certificate",
        color: "orange",
      },
      {
        name: "SQL",
        url: "https://www.linkedin.com/learning/certificates/1c375b82b05d294375c1ab8a9157351daf9fc13870329fba04cb6050207387ed?trk=share_certificate",
        color: "cyan",
      },
      {
        name: "React",
        url: "https://drive.google.com/file/d/184Xs5DsyjbIn2Pgtmk3gJJCCrqZopJDm/view?usp=sharing",
        color: "purple",
      },
      {
        name: "MERN",
        url: "https://www.udemy.com/certificate/UC-9f3317f9-66b0-413d-bb54-4422a79f31f4/",
        color: "lime",
      },
    ],
  },
  {
    title: "Technical Mentorship",
    description: "Mentored 200+ peers via comprehensive technical sessions",
    logo: "peers.svg",
    highlight: "200+ Mentees",
  },
  {
    title: "Web Dev Lead",
    description:
      "Web Development Lead at Microsoft Learner Student Club (MLSC) Prpcem",
    logo: "MLSC LEAD.svg",
    // highlight removed
  },
];

export function Activities({ className }: ActivitiesProps) {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <BlurFade delay={0.25}>
      <div className={className} ref={sectionRef}>
        <h2 className="mb-6 text-neutral-500 dark:text-neutral-400">
          Extracurricular Activities
        </h2>
        <div className="space-y-4 sm:grid sm:gap-6 sm:grid-cols-2 sm:space-y-0">
          {activities.map((activity, index) => (
            <BlurFade key={activity.title} delay={0.25 + index * 0.1}>
              {/* Mobile: Pill-shaped stack */}
              <div className="sm:hidden">
                <div
                  className="flex items-center justify-between p-4 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-full border border-white/20 dark:border-white/10 shadow-lg cursor-pointer transition-all duration-300"
                  onClick={() => toggleCard(index)}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`/svg/logos/${activity.logo}`}
                      alt={activity.title}
                      className="object-contain w-8 h-8"
                    />
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {activity.title}
                    </h3>
                  </div>
                  {expandedCards.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                  )}
                </div>

                {/* Expanded content */}
                {expandedCards.includes(index) && (
                  <div className="mt-3 p-4 bg-white/5 dark:bg-white/3 backdrop-blur-lg rounded-lg border border-white/10 dark:border-white/5 shadow-lg">
                    <p className="text-neutral-600 dark:text-neutral-400 mb-3 font-mono">
                      {activity.description}
                    </p>
                    {activity.highlight &&
                      activity.title !== "Web Dev Lead" && (
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 font-mono">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: activity.highlight,
                              }}
                            />
                          </span>
                        </div>
                      )}
                    {activity.title === "Web Dev Lead" && (
                      <div className="flex items-center gap-2 mb-3">
                        <a
                          href="https://drive.google.com/file/d/1hqkhu6YYxUHZ-JK6sUuXGdK82coR5jpI/view?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-base text-black dark:text-white underline decoration-fuchsia-500 decoration-2 underline-offset-4 transition-opacity hover:opacity-80 font-mono"
                        >
                          See Credentials
                          <ExternalLink
                            size={18}
                            className="text-fuchsia-500"
                          />
                        </a>
                      </div>
                    )}
                    {activity.certifications && (
                      <div className="flex flex-wrap gap-3 mt-3">
                        {activity.certifications.map((cert) => (
                          <a
                            key={cert.name}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-base font-bold underline decoration-1 underline-offset-2 transition-opacity hover:opacity-70 font-mono"
                            style={{
                              color:
                                cert.color === "orange"
                                  ? "#f97316"
                                  : cert.color === "cyan"
                                  ? "#06b6d4"
                                  : cert.color === "purple"
                                  ? "#a855f7"
                                  : cert.color === "lime"
                                  ? "#84cc16"
                                  : cert.color === "pink"
                                  ? "#ec4899"
                                  : "#6b7280",
                            }}
                          >
                            {cert.name}
                            <ExternalLink size={12} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Desktop: Original design */}
              <div className="hidden sm:flex group relative p-6 bg-[rgba(255,228,242,0.35)] dark:bg-black/50 rounded-lg border border-gray-200/20 dark:border-gray-700/30 sm:hover:bg-white/10 sm:dark:hover:bg-black/60 transition-all duration-300 sm:hover:scale-[1.02] min-h-[220px] sm:h-[235px] flex-col shadow-lg">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0">
                    <img
                      src={`/svg/logos/${activity.logo}`}
                      alt={activity.title}
                      className="object-contain w-12 h-12"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-3 font-mono">
                      {activity.description}
                    </p>
                    {activity.highlight &&
                      activity.title !== "Web Dev Lead" && (
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 font-mono">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: activity.highlight,
                              }}
                            />
                          </span>
                        </div>
                      )}
                    {activity.title === "Web Dev Lead" && (
                      <div className="flex items-center gap-2 mb-3">
                        <a
                          href="https://drive.google.com/file/d/1hqkhu6YYxUHZ-JK6sUuXGdK82coR5jpI/view?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-base text-black dark:text-white underline decoration-fuchsia-500 decoration-2 underline-offset-4 transition-opacity sm:hover:opacity-80 font-mono"
                        >
                          See Credentials
                          <ExternalLink
                            size={18}
                            className="text-fuchsia-500"
                          />
                        </a>
                      </div>
                    )}
                    {activity.certifications && (
                      <div className="flex flex-wrap gap-3 mt-3">
                        {activity.certifications.map((cert) => (
                          <a
                            key={cert.name}
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-base font-bold underline decoration-1 underline-offset-2 transition-opacity sm:hover:opacity-70 font-mono"
                            style={{
                              color:
                                cert.color === "orange"
                                  ? "#f97316"
                                  : cert.color === "cyan"
                                  ? "#06b6d4"
                                  : cert.color === "purple"
                                  ? "#a855f7"
                                  : cert.color === "lime"
                                  ? "#84cc16"
                                  : cert.color === "pink"
                                  ? "#ec4899"
                                  : "#6b7280",
                            }}
                          >
                            {cert.name}
                            <ExternalLink size={12} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover effect gradient */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </BlurFade>
  );
}
