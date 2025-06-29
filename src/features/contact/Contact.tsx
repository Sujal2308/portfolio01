import { Link } from "@/components/internal/Link";

export function Contact() {
  return (
    <div className="font-mono">
      <p className="mb-6">
        Reach me at&nbsp;
        <Link color="lime-500" link="mailto:sebilune@proton.me">
          sebilune@proton.me
        </Link>
      </p>
    </div>
  );
}
