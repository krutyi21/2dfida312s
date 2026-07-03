import { links } from "../data/links";

function TelegramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M21.2 4.7 18 19.6c-.2 1-.8 1.3-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L6.5 13.6 2 12.2c-1-.3-1-1 .2-1.4L19.7 4c.8-.3 1.6.2 1.5.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="m9 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TelegramCard() {
  return (
    <a
      href={links.telegram}
      target="_blank"
      rel="noopener noreferrer"
      className="telegram-card"
      aria-label="Open Telegram"
    >
      <span className="telegram-icon">
        <TelegramIcon />
      </span>
      <span className="telegram-copy">
        <span className="telegram-title">Telegram</span>
        <span className="telegram-subtitle">bonus drops ⭐ &amp; updates</span>
      </span>
      <span className="telegram-side">
        <span className="telegram-chevron">
          <ChevronIcon />
        </span>
      </span>
    </a>
  );
}
