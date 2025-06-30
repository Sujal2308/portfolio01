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
                >
                  <Code size={20} className="ml-2" />
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
