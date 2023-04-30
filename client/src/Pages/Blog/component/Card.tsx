import React from 'react';
import styles from './Card.module.scss';
import img from '../../../assets/Home/web.jpg';

const Card = (props) => {
	const tags = props.tags;

	return (
		<div className={styles.container}>
			<img src={img} alt="" />
			<div className={styles.infoContainer}>
				<p className={styles.author}>Jonathan Bajada &#x2022; {props.date}</p>
				<h4>{props.title}</h4>
				<p className={styles.description}>{props.description}</p>
			</div>
			<div className={styles.tagWrapper}>
				{tags.map((tag, index) => (
					<div className={styles.tagContainer} key={index}>
						<span className={styles.tagName}>{tag}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Card;
