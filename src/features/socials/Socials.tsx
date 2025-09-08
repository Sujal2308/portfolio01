interface SocialsProps {
  className?: string;
}

interface SocialLink {
  name: string;
  logo: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    logo: "linkedin (1).svg",
    url: "https://www.linkedin.com/in/sujal23/",
  },
  {
    name: "Twitter",
    logo: "twitter (1).svg",
    url: "https://x.com/sujal_bhugul?t=IFGoFmQzvSiixtsQK-o2_Q&s=08",
  },
  {
    name: "Discord",
    logo: "discord-svgrepo-com.svg",
    url: "https://discordapp.com/users/sujal230841",
  },
  {
    name: "LeetCode",
    logo: "leetcode.svg",
    url: "https://leetcode.com/u/sujalbhugul/",
  },
];

export function Socials({ className }: SocialsProps) {
  return (
    <div className={className}>
      <h1 className="mb-6 text-neutral-500 dark:text-neutral-400">Connect</h1>
      <div className="flex items-center gap-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative sm:hover:scale-110 transition-transform duration-200"
            aria-label={social.name}
          >
            <img
              src={`/svg/logos/${social.logo}`}
              alt={social.name}
              className={`object-contain ${
                social.name === "Discord" ? "w-14 h-14" : "w-12 h-12"
              }`}
            />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-neutral-500 dark:text-neutral-400 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
