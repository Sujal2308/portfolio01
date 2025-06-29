import React, { useState } from "react";

import { ArrowUpRight } from "lucide-react";

import type { LinkColor } from "@/types/link";

interface LinkProps {
  children: React.ReactNode;
  color: LinkColor;
  link: string;
  mail?: boolean;
}

export function Link({ children, color, link }: LinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center"
      onMouseEnter={() => {
        console.log("Mouse Enter");
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        console.log("Mouse Leave");
        setIsHovered(false);
      }}
    >
      <span
        className={`tracking-wider underline transition-all duration-200 decoration-${color}-400 decoration-2 underline-offset-4 ${isHovered ? "decoration-3" : ""}`}
      >
        {children}
      </span>
      <ArrowUpRight size={20} className={`ml-1 text-${color}-400`} />
    </a>
  );
}
