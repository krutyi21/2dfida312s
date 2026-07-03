import { useEffect, useRef } from "react";

type SensitiveContentModalProps = {
  isOpen: boolean;
  onContinue: () => void;
  onGoBack: () => void;
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

export function SensitiveContentModal({
  isOpen,
  onContinue,
  onGoBack,
}: SensitiveContentModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const primaryButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusFrame = window.requestAnimationFrame(() => {
      primaryButtonRef.current?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onGoBack();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const dialog = dialogRef.current;

      if (!dialog) {
        return;
      }

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const activeElement = document.activeElement;
      const activeIndex = focusableElements.findIndex(
        (element) => element === activeElement,
      );

      if (activeIndex === -1) {
        event.preventDefault();
        firstElement.focus();
        return;
      }

      event.preventDefault();

      const nextIndex = event.shiftKey
        ? (activeIndex - 1 + focusableElements.length) % focusableElements.length
        : (activeIndex + 1) % focusableElements.length;

      focusableElements[nextIndex].focus();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onGoBack]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div
        ref={dialogRef}
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sensitive-content-title"
        aria-describedby="sensitive-content-body"
      >
        <div className="modal-icon">
          <EyeOffIcon />
        </div>
        <h2 id="sensitive-content-title">Sensitive Content</h2>
        <p id="sensitive-content-body">
          This link may contain adult content. Please confirm that you are 18 or
          older.
        </p>
        <button
          ref={primaryButtonRef}
          type="button"
          className="modal-primary"
          onClick={onContinue}
        >
          Continue (18+)
        </button>
        <button type="button" className="modal-back" onClick={onGoBack}>
          Go back
        </button>
      </div>
    </div>
  );
}
