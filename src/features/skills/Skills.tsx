import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

// Tech skills data - matching TechSkills component
const techSkills = [
  { name: "Java", logo: "java.svg" },
  { name: "JavaScript", logo: "javascript.svg" },
  { name: "TypeScript", logo: "typescript.svg" },
  { name: "HTML", logo: "html-5-svgrepo-com.svg" },
  { name: "CSS", logo: "css-3-svgrepo-com.svg" },
  { name: "React.js", logo: "react.svg" },
  { name: "React Router", logo: "react-router-svgrepo-com (1).svg" },
  { name: "Redux", logo: "redux-logo-svgrepo-com.svg" },
  { name: "Node.js", logo: "node.svg" },
  { name: "Express.js", logo: "express-svgrepo-com (1).svg" },
  { name: "Socket.IO", logo: "socket-io-svgrepo-com.svg" },
  { name: "MongoDB", logo: "mongodb-svgrepo-com.svg" },
  { name: "MySQL", logo: "mysql-logo-svgrepo-com.svg" },
  { name: "Tailwind CSS", logo: "tailwindcss.svg" },
  { name: "Firebase", logo: "firebase-svgrepo-com.svg" },
  { name: "Git", logo: "git.svg" },
  { name: "GitHub", logo: "github.svg" },
  { name: "Linux", logo: "linux.svg" },
];

export function Skills() {
  // Map techSkills to logo format for orbiting circles
  const logos = techSkills.map((skill) => ({
    name: skill.logo,
    scale: 1.0,
    displayName: skill.name,
  }));

  const outerCount = Math.ceil(logos.length * 0.65); // 65% of logos in outer circle
  const outer = logos.slice(0, outerCount);
  const inner = logos.slice(outerCount);

  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ minHeight: 300 }}
    >
      <div className="relative" style={{ width: 300, height: 300 }}>
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <OrbitingCircles
            iconSize={40}
            radius={120}
            speed={0.5}
            className="-ml-6"
          >
            {outer.map(({ name, scale = 1.0, displayName }) => (
              <img
                key={name}
                src={`/svg/logos/${name}`}
                alt={displayName}
                width={32 * scale}
                height={32 * scale}
                style={{ objectFit: "contain", transform: `scale(${scale})` }}
              />
            ))}
          </OrbitingCircles>
          <OrbitingCircles
            iconSize={36}
            radius={60}
            reverse
            speed={0.4}
            className="-ml-6"
          >
            {inner.map(({ name, scale = 1.0, displayName }) => (
              <img
                key={name}
                src={`/svg/logos/${name}`}
                alt={displayName}
                width={28 * scale}
                height={28 * scale}
                style={{ objectFit: "contain", transform: `scale(${scale})` }}
              />
            ))}
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}
