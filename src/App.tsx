import { useRef, useState } from "react";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { FanvueCard } from "./components/FanvueCard";
import { ProfileHeader } from "./components/ProfileHeader";
import { RedirectLoading } from "./components/RedirectLoading";
import { SensitiveContentModal } from "./components/SensitiveContentModal";
import { SocialIconRow } from "./components/SocialIconRow";
import { TelegramCard } from "./components/TelegramCard";
import { links } from "./data/links";

function App() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const fanvueButtonRef = useRef<HTMLButtonElement>(null);

  function handleFanvueClick() {
    setIsAgeModalOpen(true);
  }

  function handleGoBack() {
    setIsAgeModalOpen(false);
    window.requestAnimationFrame(() => {
      fanvueButtonRef.current?.focus();
    });
  }

  function handleContinue() {
    setIsAgeModalOpen(false);
    setIsRedirecting(true);

    window.setTimeout(() => {
      window.location.assign(links.fanvue);
    }, 1000);
  }

  if (isRedirecting) {
    return <RedirectLoading />;
  }

  return (
    <>
      <BackgroundEffects />
      <main
        className="page-shell"
        aria-hidden={isAgeModalOpen ? "true" : undefined}
      >
        <section
          aria-label="Sophia Lane"
          className="profile-card w-full max-w-[560px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#0c0c0e]"
        >
          <ProfileHeader />
          <div className="content-panel">
            <FanvueCard ref={fanvueButtonRef} onClick={handleFanvueClick} />
            <TelegramCard />
            <SocialIconRow />
          </div>
        </section>
      </main>
      <SensitiveContentModal
        isOpen={isAgeModalOpen}
        onContinue={handleContinue}
        onGoBack={handleGoBack}
      />
    </>
  );
}

export default App;
