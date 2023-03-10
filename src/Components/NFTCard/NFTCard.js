import React from 'react'
import Card from 'react-bootstrap/Card'
import equilibrium from '../../Assets/Images/image-equilibrium.jpg'
import etherium from '../../Assets/Images/icon-ethereum.svg';
import styles from './NFTCard.module.css'
import CryptoPrice from '../CryptoPrice/CryptoPrice';
import TimeLeft from '../TimeLeft/TimeLeft';
import CryptoInfo from '../CryptoInfo/CryptoInfo';
import Creator from '../Creator/Creator';

const NFTCard = () => {
   return (
    <Card className={styles.card} >
      <Card.Body>
      <Card.Img className={styles.main_img} variant="top" src={equilibrium} alt="equilibrium" />
        <Card.Title className={styles.title}>Equilibrium #3429</Card.Title>
        <Card.Text className={styles.text}>
        Our Equilibrium collection promotes balance and calm.

        </Card.Text>
        <CryptoInfo />
        <Creator />
      </Card.Body>
    </Card>
  );
}

export default NFTCard
