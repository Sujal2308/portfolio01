import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

const logos = [
  "cplusplus",
  "css3",
  "git",
  "html5",
  "javascript",
  "react",
  "sqlite",
  "tailwindcss",
  "visualstudiocode",
  "vitejs",
];

export function Skills() {
  // Divide logos equally, put remainder in the outer (second) orbit
  const half = Math.floor(logos.length / 2);
  const inner = logos.slice(0, half);
  const outer = logos.slice(half);

  return (
    <div className="relative flex h-[360px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={30}>
        {inner.map((name) => (
          <img
            key={name}
            src={`/svg/logos/${name}.svg`}
            alt={name}
            width={30}
            height={30}
            style={{ objectFit: "contain" }}
          />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {outer.map((name) => (
          <img
            key={name}
            src={`/svg/logos/${name}.svg`}
            alt={name}
            width={30}
            height={30}
            style={{ objectFit: "contain" }}
          />
        ))}
      </OrbitingCircles>
    </div>
  );
}
