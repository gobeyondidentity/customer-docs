import React from 'react';

export enum Clip {
  OktaConfigureUserSettings = "AZQyqPiIAKm8bT0IYdhI",
}

/**
 * Example Usage:
 *
 * import Arcade, {Clip} from '@site/src/components/Arcade.tsx';
 * <Arcade clip={Clip.CreateRealm} />
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
        position: 'relative',
        paddingBottom: 'calc(73% + 20px)',
        height: '0',
      }}
    >
      <iframe
        src={`https://demo.arcade.software/${clip}?embed&forceNoOpeningAnimation=true`}
        frameBorder="0"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        }}
      ></iframe>
    </div>
  );
};

export default Arcade;
