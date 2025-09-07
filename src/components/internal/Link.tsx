import React, { useState } from "react";

import { ArrowUpRight } from "lucide-react";

import type { LinkColor } from "@/types/link";

interface LinkProps {
  children: React.ReactNode;
  color: LinkColor;
  link: string;
  mail?: boolean;
  underlineColor?: string; // 'auto' | 'resume' | undefined
}

export function Link({ children, color, link, underlineColor }: LinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getBackgroundColor = (color: LinkColor) => {
    switch (color) {
      case "pink":
        return "bg-pink-400/20";
      case "lime":
        return "bg-lime-400/20";
      case "cyan":
        return "bg-cyan-400/20";
      case "purple":
        return "bg-purple-400/20";
      case "orange":
        return "bg-orange-400/20";
      default:
        return "bg-gray-400/20";
    }
  };

  // Custom underline/arrow color for Resume link
  const isResume = underlineColor === "resume";
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center relative overflow-hidden"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {/* Background reveal animation */}
      <div
        className={`absolute inset-0 ${getBackgroundColor(
          color
        )} transition-all duration-300 ease-out ${
          isHovered ? "scale-x-100" : "scale-x-0"
        } origin-left rounded-sm -mx-1 -my-0.5`}
      />

      <span
        className={
          isResume
            ? `relative tracking-wider underline transition-all duration-200 decoration-2 underline-offset-4
                dark:decoration-white decoration-black
                ${isHovered ? "decoration-3" : ""}`
            : `relative tracking-wider underline transition-all duration-200 decoration-${color}-400 decoration-2 underline-offset-4 ${
                isHovered ? "decoration-3" : ""
              }`
        }
      >
        {children}
      </span>
      <ArrowUpRight
        size={20}
        className={
          isResume
            ? `relative ml-0.5 dark:text-white text-black`
            : `relative ml-0.5 text-${color}-400`
        }
      />
    </a>
  );
}
