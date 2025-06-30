import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-4 text-sm border-t-2 border-natural-400 dark:border-neutral-700 text-neutral-400 bg-background">
      <div className="container flex justify-between max-w-3xl px-10 mx-auto">
        <a
          href="https://youtu.be/gWI1d891COE?si=5kXxAofcSEvcBuUP&t=32"
          className="inline-flex items-center"
        >
          <p className="hover:underline hover:decoration-neutral-500 hover:decoration-2 hover:underline-offset-4">
            Engineers turn dreams into reality.
          </p>
          <ArrowUpRight size={16} />
        </a>
        <p>2025</p>
      </div>
    </footer>
  );
}
