import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const ImageSwitcher = ({ id, alt, lightSrc, darkSrc, style }) => {
  const { colorMode } = useColorMode();

  var imgSrc = "";
  if (colorMode === 'dark') {
    imgSrc = darkSrc;
  } else if (colorMode === 'light') {
    imgSrc = lightSrc;
  } else {
    imgSrc = lightSrc;
  }

  return <img id={id} alt={alt} src={imgSrc} style={style} />;
};

export default ImageSwitcher;
