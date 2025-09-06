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
    url: "https://linkedin.com/in/sujal-bhugul-78a94a271",
  },
  {
    name: "Twitter",
    logo: "twitter (1).svg",
    url: "https://twitter.com/sujal2308",
  },
  {
    name: "Discord",
    logo: "discord-svgrepo-com.svg",
    url: "https://discord.com/users/sujal2308",
  },
  {
    name: "LeetCode",
    logo: "leetcode.svg",
    url: "https://leetcode.com/sujal2308",
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
            className="group relative hover:scale-110 transition-transform duration-200"
            aria-label={social.name}
          >
            <img
              src={`/svg/logos/${social.logo}`}
              alt={social.name}
              className="w-12 h-12 object-contain"
            />
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-neutral-500 dark:text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
