import React from 'react';
import SbEditable from 'storyblok-react';
import { normalizeText } from 'src/services/storyblokService';

const Content = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      {normalizeText(blok.text)}
    </SbEditable>
  );
};

export default Content;
