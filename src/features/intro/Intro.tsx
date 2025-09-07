import { Link } from "@/components/internal/Link";
import { BoxReveal } from "@/components/magicui/box-reveal";

interface IntroProps {
  className?: string;
}

export function Intro({ className }: IntroProps) {
  return (
    <div className={className}>
      <p>
        <span className="font-bold tracking-wider font-newsreader">
          Turning concepts into code.
        </span>
        <span className="font-mono">
          &nbsp;I'm a Full-Stack Developer passionate about building scalable
          web applications and impactful tools. With a great experience in the
          MERN stack, backend systems, and problem-solving in Java, I bridge the
          gap between ideas and execution—crafting modern, efficient, and
          user-focused solutions.
        </span>
      </p>

      {/* Mobile Resume Button */}
      <div className="mt-4 sm:hidden">
        <BoxReveal boxColor="#c27aff">
          <Link
            color="purple"
            link="https://drive.google.com/file/d/1TckG6ETmH2WflrjcRknOOG8O0ZqBOE0m/view"
            underlineColor="resume"
          >
            <span className="font-bold" style={{ color: "tomato" }}>
              Resume
            </span>
          </Link>
        </BoxReveal>
      </div>
    </div>
  );
}
