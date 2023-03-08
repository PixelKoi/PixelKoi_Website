import React from 'react';
import styles from './Cube.module.scss';
const Cube = () => {
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<div className={styles.card} id={styles.front}>
					React
				</div>
				<div className={styles.card} id={styles.back}>
					Node
				</div>
				<div className={styles.card} id={styles.left}>
					Python
				</div>
				<div className={styles.card} id={styles.right}>
					TypeScript
				</div>
				<div className={styles.card} id={styles.top}>
					Figma
				</div>
				<div className={styles.card} id={styles.bottom}>
					C++
				</div>
			</div>
		</div>
	);
};

export default Cube;
