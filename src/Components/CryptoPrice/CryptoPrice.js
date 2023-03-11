import React from 'react';
import etherium from '../../Assets/Images/icon-ethereum.svg';

import styles from './CryptoPrice.module.css';

const CryptoPrice = () => {
  return (
    <div className={styles.flex}>
      <img src={etherium} id={styles.etherium_icon} alt="Etherium icon" />
      <span id={styles.etherium_text}>0.041ETH</span>
    </div>
  );
};

export default CryptoPrice;
