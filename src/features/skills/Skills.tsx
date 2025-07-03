import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

const logos = [
  { name: "typescript", scale: 0.9 },
  { name: "github", scale: 0.9 },
  { name: "visualstudiocode", scale: 0.95 },
  { name: "debian", scale: 1.0 },
  { name: "python", scale: 1.0 },
  { name: "node", scale: 1.0 },
  { name: "git", scale: 0.9 },
  { name: "sass", scale: 1.1 },
  { name: "docker", scale: 1.4 },
  { name: "bash", scale: 1.2 },
  { name: "go", scale: 1.1 },
  { name: "postgres", scale: 1.1 },
  { name: "hono", scale: 1.0 },
  { name: "vim", scale: 0.9 },
  { name: "tailwindcss", scale: 1.0 },
  { name: "bun", scale: 1.0 },
  { name: "next", scale: 1.0 },
  { name: "react", scale: 1.0 },
  { name: "vitejs", scale: 1.0 },
];

export function Skills() {
  const outerCount = Math.ceil(logos.length * 0.6); // 60% of logos in outer circle
  const outer = logos.slice(0, outerCount);
  const inner = logos.slice(outerCount);

  return (
    <div>
      <div className="relative flex h-[300px] w-[300px] flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={34} radius={120} speed={0.5}>
          {outer.map(({ name, scale = 1.0 }) => (
            <img
              key={name}
              src={`/svg/logos/${name}.svg`}
              alt={name}
              width={100 * scale}
              height={100 * scale}
              style={{ objectFit: "contain", transform: `scale(${scale})` }}
            />
          ))}
        </OrbitingCircles>
        <OrbitingCircles iconSize={34} radius={60} reverse speed={0.4}>
          {inner.map(({ name, scale = 1.0 }) => (
            <img
              key={name}
              src={`/svg/logos/${name}.svg`}
              alt={name}
              width={100 * scale}
              height={100 * scale}
              style={{ objectFit: "contain", transform: `scale(${scale})` }}
            />
          ))}
        </OrbitingCircles>
      </div>
    </div>
  );
}
