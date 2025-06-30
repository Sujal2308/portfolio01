import { Link } from "@/components/internal/Link";
import { BoxReveal } from "@/components/magicui/box-reveal";

export function Contact() {
  return (
    <div className="font-mono">
      <p>
        Reach me at&nbsp;
        <BoxReveal boxColor="#c27aff">
          <Link color="purple" link="mailto:sebilune@proton.me">
            sebilune@proton.me
          </Link>
        </BoxReveal>
      </p>
    </div>
  );
}
