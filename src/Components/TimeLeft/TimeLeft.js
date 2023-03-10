import React from 'react';
import clock from '../../Assets/Images/icon-clock.svg';

import styles from './TimeLeft.module.css';

const TimeLeft = () => {
  return <div className={styles.flex}>
    <img src={clock} id={styles.clock} alt="clock icon" />
    <span id={styles.time}>3 days left</span>
  </div>;
};

export default TimeLeft;
