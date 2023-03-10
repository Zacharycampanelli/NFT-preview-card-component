import React from 'react';

import avatar from '../../Assets/Images/image-avatar.png';
import styles from './Creator.module.css';

const Creator = () => {
  return (
    <div className={styles.creatorInfo}>
      <img src={avatar} id={styles.avatar} alt="creator" />
      <p id={styles.author}>Creation of <span id={styles.name}>Jules Wyvern</span></p>
    </div>
  );
};

export default Creator;
