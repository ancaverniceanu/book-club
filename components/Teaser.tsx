import React from 'react';
import SbEditable from 'storyblok-react';
import styles from './Teaser.module.scss';

const Teaser = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className={styles.container}>
        <h2 className="font-serif text-6xl font-bold text-primary">{blok.headline}</h2>
        <img
          src={blok.image && blok.image.filename}
          alt={blok.image && blok.image.alt}
          className={styles.image}
        />
      </div>
    </SbEditable>
  );
};

export default Teaser;
