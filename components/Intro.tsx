import React from 'react';
import SbEditable from 'storyblok-react';

const Intro = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="pt-10 pb-10 mb-10 border-t border-b border-gray-200">
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{blok.title}</h1>
        </div>
        <p className="mt-1 text-lg text-gray-500">{blok.description}</p>
      </div>
    </SbEditable>
  );
};

export default Intro;
