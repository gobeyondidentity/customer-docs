import React from "react";

/**
 * How to add to this:
 *
 * - In your arcade on app.arcade.software, click on arcade > share > copy code
 * - Paste the code somewhere and inspect for two values:
 *   - Arcade ID
 *   - bottom-padding
 * - Add both values below
 *
 */

export enum Clip {
  OktaUserProfileUpdate = "iljH3CoAcw28z3HUcv3Y",
  OktaGroupCreation = "GZpjH3IgEnNWDbc5gqHx",
  OktaAPITokenGeneration = "AZQyqPiIAKm8bT0IYdhI",
}

export const ClipPaddingBottom: { [key: string]: string } = {
  [Clip.OktaUserProfileUpdate]: "calc(50.546875% + 41px)",
  [Clip.OktaGroupCreation]: "calc(50.546875% + 41px)",
  [Clip.OktaAPITokenGeneration]: "calc(50.546875% + 41px)",
};

/**
 * Example Usage:
 *
 * import Arcade, {Clip} from '@site/src/components/Arcade.tsx';
 * <Arcade clip={Clip.OktaUserProfileUpdate} />
 *
 * Note:
 * clip must be one of the Clip enums above.
 */

interface ArcadeProps {
  clip: Clip;
}

const Arcade: React.FC<ArcadeProps> = ({ clip }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: ClipPaddingBottom[clip],
        height: "0",
        width: "100%",
      }}
    >
      <iframe
        src={`https://demo.arcade.software/${clip}?embed&show_copy_link=true`}
        title="Okta API Token Generation"
        frameBorder="0"
        loading="lazy"
        allowFullScreen
        allow="clipboard-write"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          colorScheme: "light",
        }}
      ></iframe>
    </div>
  );
};

export default Arcade;
