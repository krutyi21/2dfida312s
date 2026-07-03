import { links } from "../data/links";

function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="3 3 18 18" fill="none">
      <path
        d="M5.1 4.7h3.4l3.9 5.2 4.5-5.2h2l-5.6 6.5 5.9 8.1h-3.3l-4.2-5.6-4.8 5.6H4.8l6-6.9-5.7-7.7Zm2.4 1.5 9.1 11.6h1L8.5 6.2h-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="2.5 2.5 19 19" fill="none">
      <defs>
        <linearGradient
          id="instagram-gradient"
          x1="5.3"
          y1="18.9"
          x2="18.9"
          y2="5.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f2a35d" />
          <stop offset="0.42" stopColor="#dc4f86" />
          <stop offset="1" stopColor="#7c69d8" />
        </linearGradient>
      </defs>
      <rect
        x="4.2"
        y="4.2"
        width="15.6"
        height="15.6"
        rx="4.8"
        fill="url(#instagram-gradient)"
        opacity="0.92"
      />
      <rect
        x="5.35"
        y="5.35"
        width="13.3"
        height="13.3"
        rx="4"
        stroke="rgba(255,255,255,0.78)"
        strokeWidth="0.9"
      />
      <circle
        cx="12"
        cy="12"
        r="3.35"
        stroke="rgba(255,255,255,0.92)"
        strokeWidth="1.45"
      />
      <circle cx="16.15" cy="7.85" r="1.12" fill="rgba(255,255,255,0.92)" />
    </svg>
  );
}

function RedditIcon() {
  return (
    <svg aria-hidden="true" viewBox="2.4 2.4 19.2 19.2" fill="none">
      <defs>
        <linearGradient
          id="reddit-gradient"
          x1="7"
          y1="19"
          x2="17.5"
          y2="5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ff7a2f" />
          <stop offset="1" stopColor="#e24a25" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="8.45" fill="url(#reddit-gradient)" opacity="0.9" />
      <path
        d="M13.55 9.25 14.25 6.8l2.42.52"
        stroke="rgba(255,255,255,0.92)"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.08" cy="7.4" r="0.8" fill="rgba(255,255,255,0.92)" />
      <circle cx="7.15" cy="12.45" r="1.45" fill="rgba(255,255,255,0.92)" />
      <circle cx="16.85" cy="12.45" r="1.45" fill="rgba(255,255,255,0.92)" />
      <path
        d="M7.6 13.1c0-2.12 1.95-3.62 4.4-3.62s4.4 1.5 4.4 3.62c0 2.22-1.95 3.78-4.4 3.78s-4.4-1.56-4.4-3.78Z"
        fill="rgba(255,255,255,0.94)"
      />
      <circle cx="10.25" cy="12.75" r="0.68" fill="#f15a29" />
      <circle cx="13.75" cy="12.75" r="0.68" fill="#f15a29" />
      <path
        d="M10.1 14.65c0.98 0.72 2.82 0.72 3.8 0"
        stroke="#f15a29"
        strokeWidth="1.18"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SocialIconRow() {
  return (
    <div className="social-row" aria-label="Social links">
      <a
        href={links.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Open X"
      >
        <XIcon />
      </a>
      <a
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Open Instagram"
      >
        <InstagramIcon />
      </a>
      <a
        href={links.reddit}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Open Reddit"
      >
        <RedditIcon />
      </a>
    </div>
  );
}
