import React from 'react';
import Teaser from './Teaser';
import Feature from './Feature';
import Grid from './Grid';
import Placeholder from './Placeholder';
import Intro from './Intro';
import Content from './Content';

const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  intro: Intro,
  content: Content,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
