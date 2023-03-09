import React, { useEffect, useRef } from 'react';
import styles from './Global.module.scss';
import earth from '../../../../assets/Home/earth.png';
import checkmark from '../../../../assets/Home/checkmark.svg';
import { motion, animate, useTransform, useMotionValue, useInView } from 'framer-motion';

const Global = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const countUp = () => {
		const controls = animate(count, 100, { duration: 2 });
		return controls.stop;
	};
	const random = () => {
		return;
	};
	useEffect(
		() => {
			isInView === true ? countUp() : random();
		},
		[ isInView ]
	);
	return (
		<div ref={ref} className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.cta}>
					<div>
						<motion.img
							animate={{ rotate: 360 }}
							transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
							src={earth}
							width={100}
							style={{ color: 'black' }}
						/>
					</div>
					<h1>Global Network</h1>
					<hr style={{ borderColor: '#fff', width: '4rem' }} />
					<p>We are a global team, with networks spanning North America and SEA</p>
				</div>
			</div>

			<div className={styles.listContainer}>
				<div className={styles.itemGroup}>
					<img src={checkmark} />
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<motion.p>{rounded}</motion.p>
						<p style={{ alignSelf: 'center' }}>% Remote</p>
					</div>
				</div>
				<div className={styles.itemGroup}>
					<img src={checkmark} />
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<motion.p>{rounded}</motion.p>
						<p style={{ alignSelf: 'center' }}>% Full-Stack</p>
					</div>
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
