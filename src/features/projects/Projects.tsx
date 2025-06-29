import { BoxReveal } from "@/components/magicui/box-reveal";

import { Link } from "@/components/internal/Link";

import type { LinkColor } from "@/types/link";

interface Project {
  name: string;
  desc: string;
  link: string;
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
      color: "lime",
      boxColor: "#9ae600",
      delay: 0.3,
    },
    {
      name: "Project",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://example.com",
      color: "pink",
      boxColor: "#fb64b6",
      delay: 0.35,
    },
    {
      name: "Project",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://example.com",
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
              <Link color={project.color} link={project.link}>
                {project.name}
              </Link>
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
