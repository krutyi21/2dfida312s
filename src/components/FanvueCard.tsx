import { forwardRef } from "react";
import { siteConfig } from "../data/site";
import { assetPath } from "../utils/assetPath";

type FanvueCardProps = {
  onClick: () => void;
};

function EyeOffIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 3l18 18M10.6 10.7a2 2 0 0 0 2.7 2.7M9.5 5.2A10.2 10.2 0 0 1 12 5c5.2 0 8.5 4.7 9.2 6a12.4 12.4 0 0 1-2.4 3.2M6.8 6.8A12.8 12.8 0 0 0 2.8 11c.7 1.3 4 6 9.2 6 1.4 0 2.7-.3 3.8-.9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const FanvueCard = forwardRef<HTMLButtonElement, FanvueCardProps>(
  function FanvueCard({ onClick }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className="fanvue-card"
        onClick={onClick}
        aria-label="Open Fanvue confirmation"
      >
        <picture>
          <source
            srcSet={assetPath(siteConfig.fanvuePreviewWebp)}
            type="image/webp"
          />
          <img
            src={assetPath(siteConfig.fanvuePreviewJpg)}
            alt=""
            width="800"
            height="420"
            loading="lazy"
            decoding="async"
            className="fanvue-image"
          />
        </picture>
        <span className="fanvue-icon">
          <EyeOffIcon />
        </span>
        <span className="fanvue-overlay" />
        <span className="fanvue-title">exclusive content &amp; chat</span>
      </button>
    );
  },
);
