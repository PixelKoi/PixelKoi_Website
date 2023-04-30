import React from 'react';
import styles from './Card.module.scss';
import img from '../../../assets/Home/web.jpg';

const Card = (props) => {
	return (
		<div className={styles.container}>
			<img src={img} alt="" />
			<div className={styles.infoContainer}>
				<p>Jonathan Bajada &#x2022; {props.date}</p>
				<h4>{props.title}</h4>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

export default Card;
