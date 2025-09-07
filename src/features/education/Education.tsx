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
}

const educationData: EducationItem[] = [
  {
    institution: "P R Pote Engineering and Management, Amravati",
    degree: "B.E in Computer Science and Engineering",
    location: "Amravati, Maharashtra, INDIA",
    period: "Jun-2026",
    status: "Expected",
    logo: "engineering.svg",
  },
  {
    institution: "Shri Shivaji Multipurpose Jr. College, Amt",
    degree: "HSC in PCM",
    location: "Amt, Maharashtra",
    period: "Feb-2022",
    logo: "HSC.svg",
  },
  {
    institution: "Golden Kids English High School, Amt",
    degree: "SSC",
    location: "Amt, Maharashtra",
    period: "Mar-2020",
    logo: "ssc.svg",
  },
];

export function Education({ className }: EducationProps) {
  return (
    <div className={className}>
      <div className="space-y-6">
        {educationData.map((edu, index) => {
          return (
            <div
              key={index}
              className="p-4 bg-white/5 dark:bg-black/10 rounded-lg border border-gray-200/20 dark:border-gray-700/30 hover:bg-white/10 dark:hover:bg-black/20 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <img
                    src={`/svg/logos/${edu.logo}`}
                    alt="Education"
                    className="w-8 h-8 object-contain"
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
                    <p className="text-zinc-700 dark:text-zinc-300 font-medium mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {edu.location}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0">
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {edu.period}
                      {edu.status && (
                        <span className="ml-2 text-xs text-blue-600 dark:text-blue-400 font-medium sm:hidden">
                          {edu.status}
                        </span>
                      )}
                    </span>
                    {edu.status && (
                      <span className="hidden sm:block text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
