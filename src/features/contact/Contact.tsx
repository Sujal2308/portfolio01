import { Link } from "@/components/internal/Link";
import { BoxReveal } from "@/components/magicui/box-reveal";

export function Contact() {
  return (
    <div className="font-mono flex flex-col items-start gap-3">
      <div>
        Reach me at&nbsp;
        <BoxReveal boxColor="#c27aff">
          <Link color="purple" link="mailto:sujalbhugul08@gmail.com">
            sujalbhugul08@gmail.com
          </Link>
        </BoxReveal>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
          Open to Work
        </span>
      </div>
    </div>
  );
}
