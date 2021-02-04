import React from 'react';
import SbEditable from 'storyblok-react';
import DynamicIcon from './icons/DynamicIcon';

const Feature = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="flex flex-col items-center p-2 py-16 text-center sm:p-10">
        <DynamicIcon type={blok.icon} />
        <div className="px-6 py-4">
          <a href={blok.link && blok.link.cached_url}>
            <div className="my-4 text-xl font-bold">{blok.name}</div>
            <p className="text-base text-gray-600">{blok.description}</p>
          </a>
        </div>
      </div>
    </SbEditable>
  );
};

export default Feature;
