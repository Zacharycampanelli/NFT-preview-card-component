import React from 'react';
import Card from 'react-bootstrap/Card';
import equilibrium from '../../Assets/Images/image-equilibrium.jpg';
import view from '../../Assets/Images/icon-view.svg';
import styles from './NFTCard.module.css';
import CryptoInfo from '../CryptoInfo/CryptoInfo';
import Creator from '../Creator/Creator';

const NFTCard = () => {
  return (
    <Card className={styles.card}>
      <Card.Body>
        <div className={styles.image_container}>
          <Card.Img className={styles.main_img} variant="top" src={equilibrium} alt="equilibrium" />
          <div className={styles.overlay}></div>
          <Card.Img src={view} className={styles.view} alt="image overlay"/>
        </div>
      </Card.Body>
      <Card.Body className={styles.content}>
        <Card.Title className={styles.title}>Equilibrium #3429</Card.Title>
        <Card.Text className={styles.text}>Our Equilibrium collection promotes balance and calm.</Card.Text>
        <CryptoInfo />
        <Creator />
      </Card.Body>
    </Card>
  );
};

export default NFTCard;
