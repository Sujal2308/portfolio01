import { Link } from "@/components/internal/Link";
import { BoxReveal } from "@/components/magicui/box-reveal";

export function Contact() {
  return (
    <div className="font-mono">
      Reach me at&nbsp;
      <BoxReveal boxColor="#c27aff">
        <Link color="purple" link="mailto:sujalbhugul08@gmail.com">
          sujalbhugul08@gmail.com
        </Link>
      </BoxReveal>
    </div>
  );
}
