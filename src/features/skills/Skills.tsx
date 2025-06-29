import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Projects } from "./Projects";

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
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 w-full">
        <div className="flex-shrink-0 md:self-center">
          <div className="relative flex h-[300px] w-[300px] flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={30} radius={120}>
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
            <OrbitingCircles iconSize={30} radius={60} reverse speed={2}>
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
        </div>
        <Projects />
      </div>
    </section>
  );
}
