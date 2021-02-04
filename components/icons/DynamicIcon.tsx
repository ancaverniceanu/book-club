import React from 'react';
import Mail from './Mail';
import Phone from './Phone';
import Twitter from './Twitter';
import Calendar from './Calendar';
import Book from './Book';
import Recommendation from './Recommendation';
import styles from './DynamicIcon.module.scss';

const Components = {
  twitter: Twitter,
  mail: Mail,
  phone: Phone,
  calendar: Calendar,
  book: Book,
  recommendation: Recommendation,
};

const DynamicIcon = ({ type }) => {
  if (typeof Components[type] !== 'undefined') {
    const Component = Components[type];
    return (
      <div className={styles.icon}>
        <Component />
      </div>
    );
  }
  return null;
};

export default DynamicIcon;
