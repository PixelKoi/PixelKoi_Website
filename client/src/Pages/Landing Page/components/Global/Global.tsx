import React from 'react';
import styles from './Global.module.scss';
import earth from '../../../../assets/Home/earth.png';
import checkmark from '../../../../assets/Home/checkmark.svg';

const Global = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.cta}>
					<div>
						<img src={earth} width={100} style={{ color: 'black' }} />
					</div>
					<h1>Global Network</h1>
					<p>We are a global team, with networks spanning North America and SEA</p>
				</div>
			</div>

			<div className={styles.listContainer}>
				<div className={styles.itemGroup}>
					<img src={checkmark} />
					<p>100% Remote</p>
				</div>
				<div className={styles.itemGroup}>
					<img src={checkmark} />
					<p>100% Full-Stack</p>
				</div>
				<div className={styles.itemGroup}>
					<img src={checkmark} />
					<p>24/7 Availability</p>
				</div>
			</div>
		</div>
	);
};

export default Global;
