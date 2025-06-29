import React from "react";

import { ArrowUpRight } from "lucide-react";

interface LinkProps {
  children: React.ReactNode;
  color: "pink" | "lime" | "cyan" | "purple";
  link: string;
  mail?: boolean;
}

export function Link({ children, color, link }: LinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center"
    >
      <span
        className={`tracking-wider underline transition-all duration-200 decoration-${color}-400 decoration-2 underline-offset-4 hover:decoration-3`}
      >
        {children}
      </span>
      <ArrowUpRight size={20} className={`ml-1 text-${color}-400`} />
    </a>
  );
}
