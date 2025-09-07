import { useState, useRef } from "react";

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
  { name: "React Router", logo: "react-router-svgrepo-com (1).svg" },
  { name: "Redux", logo: "redux-logo-svgrepo-com.svg" },
  { name: "Node.js", logo: "node.svg" },
  { name: "Express.js", logo: "express-svgrepo-com (1).svg" },
  { name: "Socket.IO", logo: "socket-io-svgrepo-com.svg" },
  { name: "MongoDB", logo: "mongodb-svgrepo-com.svg" },
  { name: "MySQL", logo: "mysql-logo-svgrepo-com.svg" },
  { name: "Tailwind CSS", logo: "tailwindcss.svg" },
  { name: "Firebase", logo: "firebase-svgrepo-com.svg" },
  { name: "Git", logo: "git.svg" },
  { name: "GitHub", logo: "github.svg" },
  { name: "Linux", logo: "linux.svg" },
];

export function TechSkills({ className }: TechSkillsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 4 rows × 3 columns on mobile
  const totalPages = Math.ceil(techSkills.length / itemsPerPage);

  // Ref for scrolling
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSkills = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return techSkills.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    setCurrentPage((prev) => {
      const next = prev < totalPages ? prev + 1 : prev;
      setTimeout(scrollToSkills, 0);
      return next;
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => {
      const next = prev > 1 ? prev - 1 : prev;
      setTimeout(scrollToSkills, 0);
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
            className="flex flex-col items-center p-4 bg-white/5 dark:bg-black/10 rounded-lg border border-gray-200/20 dark:border-gray-700/30 hover:bg-white/10 dark:hover:bg-black/20 transition-colors duration-200"
          >
            <img
              src={`/svg/logos/${skill.logo}`}
              alt={skill.name}
              className="w-8 h-8 mb-2 object-contain"
            />
            <span className="text-sm font-medium text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile: Show paginated items */}
      <div className="sm:hidden">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {getCurrentPageItems().map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-white/5 dark:bg-black/10 rounded-lg border border-gray-200/20 dark:border-gray-700/30 hover:bg-white/10 dark:hover:bg-black/20 transition-colors duration-200"
            >
              <img
                src={`/svg/logos/${skill.logo}`}
                alt={skill.name}
                className="w-8 h-8 mb-2 object-contain"
              />
              <span className="text-sm font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-white/5 dark:bg-black/10 border border-gray-200/20 dark:border-gray-700/30 hover:bg-white/10 dark:hover:bg-black/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 dark:bg-black/10 border border-gray-200/20 dark:border-gray-700/30 hover:bg-white/10 dark:hover:bg-black/20"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-white/5 dark:bg-black/10 border border-gray-200/20 dark:border-gray-700/30 hover:bg-white/10 dark:hover:bg-black/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
