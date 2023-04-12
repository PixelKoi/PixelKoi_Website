import React from 'react';
import styles from './Card.module.scss';
import jonny from '../../../../assets/images/slider/jonny.webp';

const Card = (props: any) => {
	return (
		<div className={styles.card}>
			<img className={styles.imageScale} src={props.image} alt={props.alt} />
			<div className={styles.imageText}>
				<h6>
					<b>{props.name}</b>
				</h6>
				<p className={styles.imagep}>{props.description}</p>
			</div>
		</div>
	);
};

export default Card;
