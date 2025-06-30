import { BoxReveal } from "@/components/magicui/box-reveal";
import { Code } from "lucide-react";

import { Link } from "@/components/internal/Link";
import type { LinkColor } from "@/types/link";

interface Project {
  name: string;
  desc: string;
  link: string;
  code: string;
  color: LinkColor;
  boxColor: string;
  delay?: number;
}

export function Projects() {
  const projects: Project[] = [
    {
      name: "Project",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://example.com",
      code: "https://github.com",
      color: "lime",
      boxColor: "#9ae600",
      delay: 0.2,
    },
    {
      name: "Project",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://example.com",
      code: "https://github.com",
      color: "pink",
      boxColor: "#fb64b6",
      delay: 0.3,
    },
    {
      name: "Project",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://example.com",
      code: "https://github.com",
      color: "cyan",
      boxColor: "#53eafd",
      delay: 0.4,
    },
  ];

  return (
    <div className="flex flex-col flex-1 max-w-md gap-6">
      <h1 className="text-neutral-500 dark:text-neutral-400">Projects</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h1 className="mb-1 font-semibold tracking-wider">
            <BoxReveal boxColor={project.boxColor} delay={project.delay}>
              <div className="inline-flex items-center">
                <Link color={project.color} link={project.link}>
                  {project.name}
                </Link>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block w-5 h-5 ml-2 group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full transition-all scale-100 rotate-0 group-hover:scale-0 group-hover:-rotate-90">
                    <Code
                      size={20}
                      className="text-zinc-700 dark:text-neutral-300"
                    />
                  </span>
                  <svg
                    viewBox="0 0 98 96"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full transition-all scale-0 rotate-90 group-hover:scale-100 group-hover:rotate-0 text-zinc-700 dark:text-neutral-300"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    />
                  </svg>
                </a>
              </div>
            </BoxReveal>
          </h1>
          <p className="font-mono text-neutral-500 dark:text-neutral-400">
            {project.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
