import React from 'react';
import SbEditable from 'storyblok-react';

const Intro = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="container">
        <h1 className="h2">{blok.title}</h1>
        <p>{blok.description}</p>
      </div>
    </SbEditable>
  );
};

export default Intro;
