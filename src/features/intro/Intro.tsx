interface IntroProps {
  className?: string;
}

export function Intro({ className }: IntroProps) {
  return (
    <p className={className}>
      <span className="font-bold font-newsreader">Bringing ideas to life.</span>
      &nbsp;I am a full-stack Software Engineer based near Fort Lauderdale,
      specialized in the development of modern websites, apps, tools, and
      everything in between.
    </p>
  );
}
