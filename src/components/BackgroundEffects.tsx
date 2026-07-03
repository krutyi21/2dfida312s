import { siteConfig } from "../data/site";
import { assetPath } from "../utils/assetPath";

export function BackgroundEffects() {
  return (
    <>
      <div
        className="background-photo"
        style={{
          backgroundImage: `url("${assetPath(siteConfig.backgroundImage)}")`,
        }}
      />
      <div className="background-dim" />
    </>
  );
}
