interface IntroProps {
  className?: string;
}

export function Intro({ className }: IntroProps) {
  return (
    <div className={className}>
      <p className="text-base sm:text-lg md:text-lg lg:text-xl">
        <span className="font-bold tracking-wider font-newsreader">
          Turning concepts into code.
        </span>
        <span className="font-mono">
          &nbsp;I'm a Full-Stack Developer passionate about building scalable
          web applications and impactful tools. With a great experience in the{" "}
          <span>MERN stack</span>, backend systems, and problem-solving in Java,
          I bridge the gap between ideas and execution — crafting modern,
          efficient, and user-focused solutions.
        </span>
      </p>

      {/* Mobile Resume Button - Glassmorphism */}
      <div className="mt-4 sm:hidden">
        <a
          href="https://drive.google.com/file/d/1TckG6ETmH2WflrjcRknOOG8O0ZqBOE0m/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/35 dark:bg-gray-800/50 backdrop-blur-xl border-2 border-white/50 dark:border-gray-600/60 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:bg-white/40 dark:hover:bg-gray-800/60 font-bold text-lg"
          style={{ color: "tomato" }}
        >
          <span>Resume</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
