import React from 'react';
import styles from './HeaderCard.module.scss';
import img from '../../../assets/Home/web.jpg';

const HeaderCard = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<img src={img} />
			</div>
		</div>
	);
};

export default HeaderCard;
