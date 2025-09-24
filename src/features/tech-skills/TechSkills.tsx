import { useState, useRef } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";

interface TechSkillsProps {
  className?: string;
}

const techSkills = [
  { name: "Java", logo: "java.svg" },
  { name: "JavaScript", logo: "javascript.svg" },
  { name: "TypeScript", logo: "typescript.svg" },
  { name: "HTML", logo: "html-5-svgrepo-com.svg" },
  { name: "CSS", logo: "css-3-svgrepo-com.svg" },
  { name: "React.js", logo: "react.svg" },
  { name: "Socket.IO", logo: "Socket.io.svg", logoDark: "Socket.io-bg.svg" },
  { name: "Redux", logo: "redux-logo-svgrepo-com.svg" },
  { name: "Node.js", logo: "node.svg" },
  { name: "Firebase", logo: "firebase-svgrepo-com.svg" },
  { name: "MongoDB", logo: "mongodb-svgrepo-com.svg" },
  { name: "MySQL", logo: "mysql-logo-svgrepo-com.svg" },
  { name: "Tailwind CSS", logo: "tailwindcss.svg" },
  { name: "Express.js", logo: "Express.svg", logoDark: "Express-bg.svg" },
  { name: "Router-dom", logo: "react-router-svgrepo-com (1).svg" }, // Updated to prevent wrapping
  { name: "Git", logo: "git.svg" },
  { name: "GitHub", logo: "github.svg" },
  { name: "Linux", logo: "linux.svg" },
];

export function TechSkills({ className }: TechSkillsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 4 rows × 3 columns on mobile
  const totalPages = Math.ceil(techSkills.length / itemsPerPage);

  // Ref for the grid container to control scroll position
  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return techSkills.slice(startIndex, endIndex);
  };

  const scrollGridToTop = () => {
    if (gridRef.current) {
      gridRef.current.scrollTop = 0;
    }
    // Use the skills-section ID to scroll to the proper position with offset
    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const nextPage = () => {
    setCurrentPage((prev) => {
      const next = prev < totalPages ? prev + 1 : prev;
      setTimeout(scrollGridToTop, 0);
      return next;
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => {
      const next = prev > 1 ? prev - 1 : prev;
      setTimeout(scrollGridToTop, 0);
      return next;
    });
  };

  return (
    <div className={className} id="skills-section" ref={sectionRef}>
      {/* Desktop: Show all items */}
      <div className="hidden sm:grid grid-cols-4 gap-4 md:grid-cols-5 lg:grid-cols-6">
        {techSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-white/5 dark:bg-black/10 rounded-lg border border-gray-300 dark:border-gray-700/30 sm:hover:bg-white/10 sm:dark:hover:bg-black/20 transition-colors duration-200"
          >
            <img
              src={`/svg/logos/${skill.logo}`}
              alt={skill.name}
              className="w-8 h-8 mb-2 object-contain"
            />
            <span
              className={`text-sm font-medium text-center${
                ["Tailwind CSS", "Router-dom"].includes(skill.name)
                  ? " whitespace-nowrap"
                  : ""
              }`}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile: Show paginated items */}
      <div className="sm:hidden">
        <div
          ref={gridRef}
          className="grid grid-cols-3 gap-4 mb-6 max-h-[600px] overflow-y-auto"
        >
          {getCurrentPageItems().map((skill, index) => (
            <BlurFade key={skill.name} delay={0.15 + index * 0.07}>
              <div className="flex flex-col items-center p-4 bg-white/5 dark:bg-black/50 rounded-lg border border-gray-300 dark:border-gray-700/30 sm:hover:bg-white/10 sm:dark:hover:bg-black/60 transition-colors duration-200">
                {skill.logoDark ? (
                  <>
                    <img
                      src={`/svg/logos/${skill.logo}`}
                      alt={skill.name}
                      className="w-8 h-8 mb-2 object-contain block dark:hidden"
                    />
                    <img
                      src={`/svg/logos/${skill.logoDark}`}
                      alt={skill.name}
                      className="w-8 h-8 mb-2 object-contain hidden dark:block"
                    />
                  </>
                ) : (
                  <img
                    src={`/svg/logos/${skill.logo}`}
                    alt={skill.name}
                    className="w-8 h-8 mb-2 object-contain"
                  />
                )}
                <span className="text-sm font-medium text-center">
                  <span className="whitespace-nowrap">{skill.name}</span>
                </span>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Pagination Controls - Dynamic Island Style */}
        <div className="relative flex items-center w-full justify-center">
          {currentPage > 1 && (
            <span
              onClick={prevPage}
              className="flex items-center gap-1 select-none cursor-pointer text-sm font-bold text-blue-500 sm:hover:underline absolute left-0"
              role="button"
              tabIndex={0}
              style={{ minWidth: "80px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </span>
          )}
          
          {/* Dynamic Island/Notch Style Pagination */}
          <div className="flex items-center justify-center">
            <div className="bg-white/25 dark:bg-gray-800/40 backdrop-blur-lg border-2 border-white/40 dark:border-gray-600/50 rounded-full px-3 py-2 shadow-xl shadow-black/20 dark:shadow-black/40">
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        setTimeout(scrollGridToTop, 0);
                      }}
                      className={`w-8 h-8 text-sm font-bold rounded-full transition-all duration-300 ${
                        currentPage === page
                          ? "bg-blue-500/80 text-white shadow-lg scale-110 backdrop-blur-sm border-2 border-blue-400/60"
                          : "text-gray-800 dark:text-gray-200 sm:hover:bg-white/30 sm:dark:hover:bg-gray-700/50 sm:hover:scale-105 sm:hover:backdrop-blur-sm border border-transparent sm:hover:border-white/30"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
          
          <span
            onClick={currentPage === totalPages ? undefined : nextPage}
            className={`flex items-center gap-1 select-none cursor-pointer text-sm font-bold ${
              currentPage === totalPages
                ? "opacity-50 cursor-default"
                : "text-blue-500 sm:hover:underline"
            } absolute right-0`}
            role="button"
            tabIndex={currentPage === totalPages ? -1 : 0}
            aria-disabled={currentPage === totalPages}
            style={{ minWidth: "60px" }}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
