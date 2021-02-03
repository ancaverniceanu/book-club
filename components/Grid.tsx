import React from 'react';
import DynamicComponent from './DynamicComponent';
import SbEditable from 'storyblok-react';

const Grid = ({ blok }) => (
  <SbEditable content={blok}>
    <ul className="flex flex-wrap py-8 mb-6">
      {blok.columns.map((nestedBlok) => (
        <li key={nestedBlok._uid} className="w-full px-3 my-3 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <DynamicComponent blok={nestedBlok} />
        </li>
      ))}
    </ul>
  </SbEditable>
);

export default Grid;
