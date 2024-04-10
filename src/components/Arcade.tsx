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
  OktaConfigurationAPIToken = "iljH3CoAcw28z3HUcv3Y",
  IdentitiesAddId = "y8Zyxz7jbKLEmAtgvMyF",
  IdentitiesSelectId = "uXu2DWJnIGaT6bWmWGuS",
  IdentitiesAddPasskey = "X3d2DAvkEC0njEJfMWpS",
  IdentitiesSendEmail = "eCHsTZeCYT5RluBym27z",
  IdentitiesEditId = "PIM8rhVMC30oxdMZBMWk",
  IdentitiesBindingJobsTab = "6zut5SV0T9V80kDdSJj9",
  GroupsAddGroupCallout = "ZOGqnheQpo9C4tAywQOm",
}

export const ClipPaddingBottom: { [key: string]: string } = {
  [Clip.OktaUserProfileUpdate]: "calc(50.546875% + 41px)",
  [Clip.OktaGroupCreation]: "calc(50.546875% + 41px)",
  [Clip.OktaAPITokenGeneration]: "calc(50.546875% + 41px)",
  [Clip.IdentitiesAddId]: "calc(70.50359712230215% + 41px)",
  [Clip.IdentitiesSelectId]: "calc(71.4478417266187% + 41px)",
  [Clip.IdentitiesAddPasskey]: "calc(71.49280575539568% + 41px)",
  [Clip.IdentitiesSendEmail]: "calc(72.52697841726618% + 41px)",
  [Clip.IdentitiesEditId]: "calc(71.4478417266187% + 41px)",
  [Clip.IdentitiesBindingJobsTab]: "calc(71.4478417266187% + 41px)",
  [Clip.GroupsAddGroupCallout]: "calc(64.92805755395683% + 41px)",
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
