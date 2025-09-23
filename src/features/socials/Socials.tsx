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
  {
    name: "Instagram",
    logo: "instagram (1).svg",
    url: "https://www.instagram.com/sujalbhugul?igsh=aGFhcW9jcnNlOTQ=",
  },
];

export function Socials({ className }: SocialsProps) {
  return (
    <div className={className}>
      <h1 className="mb-6 text-neutral-500 dark:text-neutral-400">Connect</h1>
      <div className="flex items-center gap-4">
        {socialLinks.map((social, idx) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative sm:hover:scale-110 transition-transform duration-200 ${
              idx !== 0 ? "pl-4 ml-1" : ""
            }`}
            aria-label={social.name}
          >
            <img
              src={`/svg/logos/${social.logo}`}
              alt={social.name}
              className={`object-contain ${
                social.name === "Discord"
                  ? "w-16 h-16 md:w-14 md:h-14"
                  : "w-14 h-14 md:w-12 md:h-12"
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
