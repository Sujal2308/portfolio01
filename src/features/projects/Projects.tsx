import { Link } from "@/components/internal/Link";

import type { LinkColor } from "@/types/link";

interface Project {
  name: string;
  desc: string;
  link: string;
  color: LinkColor;
}

export function Projects() {
  const projects: Project[] = [
    {
      name: "Project",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://example.com",
      color: "lime",
    },
    {
      name: "Project",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://example.com",
      color: "pink",
    },
    {
      name: "Project",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://example.com",
      color: "cyan",
    },
  ];

  return (
    <div className="flex flex-col flex-1 max-w-md gap-6">
      <h1 className="text-neutral-500 dark:text-neutral-400">Projects</h1>
      {projects.map((project) => (
        <div key={project.name}>
          <h1 className="mb-1 font-semibold tracking-wider">
            <Link color={project.color} link={project.link}>
              {project.name}
            </Link>
          </h1>
          <p className="font-mono text-neutral-500 dark:text-neutral-400">
            {project.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
