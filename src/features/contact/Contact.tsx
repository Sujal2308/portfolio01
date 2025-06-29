import { Link } from "@/components/internal/Link";

export function Contact() {
  return (
    <div className="font-mono">
      <p className="mb-6">
        Reach me at&nbsp;
        <Link color="purple" link="mailto:sebilune@proton.me">
          sebilune@proton.me
        </Link>
      </p>
    </div>
  );
}
