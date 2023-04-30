import React from 'react';
import styles from './Card.module.scss';
import img from '../../../assets/Home/web.jpg';

const Card = () => {
	return (
		<div className={styles.container}>
			<img src={img} alt="" />
		</div>
	);
};

export default Card;
