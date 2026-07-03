import { siteConfig } from "../data/site";
import { assetPath } from "../utils/assetPath";

export function ProfileHeader() {
  return (
    <header className="hero-section">
      <picture>
        <source
          srcSet={assetPath(siteConfig.heroImageWebp)}
          type="image/webp"
        />
        <img
          src={assetPath(siteConfig.heroImageJpg)}
          alt="Sophia Lane"
          width="800"
          height="660"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="hero-image"
        />
      </picture>
      <div className="hero-overlay" />
      <h1 className="hero-name">{siteConfig.name}</h1>
    </header>
  );
}
