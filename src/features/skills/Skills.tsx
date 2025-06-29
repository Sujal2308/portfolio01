import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

const logos = [
  "github",
  "visualstudiocode",
  "debian",
  "python",
  "node",
  "git",
  "sass",
  "bash",
  "go",
  "postgres",
  "docker",
  "vim",
  "typescript",
  "tailwindcss",
  "bun",
  "next",
  "react",
  "vitejs",
];

export function Skills() {
  const outerCount = Math.ceil(logos.length * 0.6); // 60% of logos in outer circle
  const outer = logos.slice(0, outerCount);
  const inner = logos.slice(outerCount);

  return (
    <div className="flex-shrink-0 md:self-center">
      <div className="relative flex h-[300px] w-[300px] flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={34} radius={120}>
          {outer.map((name) => (
            <img
              key={name}
              src={`/svg/logos/${name}.svg`}
              alt={name}
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
            />
          ))}
        </OrbitingCircles>
        <OrbitingCircles iconSize={34} radius={60} reverse speed={2}>
          {inner.map((name) => (
            <img
              key={name}
              src={`/svg/logos/${name}.svg`}
              alt={name}
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
            />
          ))}
        </OrbitingCircles>
      </div>
    </div>
  );
}
