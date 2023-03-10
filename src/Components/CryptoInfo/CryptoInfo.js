import React from 'react';
import CryptoPrice from '../CryptoPrice/CryptoPrice';
import TimeLeft from '../TimeLeft/TimeLeft';

import styles from './CryptoInfo.module.css';

const CryptoInfo = () => {
  return (
    <div className={styles.data}>
      <CryptoPrice />
      <TimeLeft />
    </div>
  );
};

export default CryptoInfo;
