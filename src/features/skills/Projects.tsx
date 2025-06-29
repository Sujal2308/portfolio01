export function Projects() {
  const projects = [
    {
      name: "Proj",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Proj",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Proj",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="flex flex-col flex-1 max-w-md gap-6">
      <h1 className="text-neutral-500 dark:text-neutral-400">Projects</h1>
      {projects.map((project) => (
        <div key={project.name}>
          <h1 className="mb-1 font-semibold tracking-wider">{project.name}</h1>
          <p className="font-mono text-neutral-500 dark:text-neutral-400">
            {project.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
