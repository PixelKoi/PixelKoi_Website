import React from 'react';
import styles from './RevealText4.module.scss';
import { motion } from 'framer-motion';
import SpinningImage from './3Dsquare/SpinningImage';
import OurTech from '../../OurTech/OurTech';

export const RevealText4 = () => {
	const list = { show: { opacity: 1, transition: { staggerChildren: 0.09 } } };
	const item = { show: { y: 0, opacity: 1, transition: { duration: 0.5 } } };
	return (
		// <div className={styles.mainContainer}>
		// 	<div className={styles.container2}>
		// 		<motion.div initial={{ opacity: 0 }} animate="show" variants={list} className={styles.textContainer2}>
		// 			<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text2}>
		// 				We
		// 			</motion.h1>
		// 			<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text2}>
		// 				Design
		// 			</motion.h1>
		// 			<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text2}>
		// 				Custom
		// 			</motion.h1>
		// 			<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text2}>
		// 				Software
		// 			</motion.h1>
		// 		</motion.div>
		// 		<div className={styles.ourTech}>
		// 			<OurTech />
		// 		</div>
		// 	</div>
		// </div>
		<div>
			<div className={styles.container} style={{ position: 'relative' }}>
				<motion.div initial={{ opacity: 0 }} animate="show" variants={list} className={styles.textContainer}>
					<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text}>
						We
					</motion.h1>
					<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text}>
						Design
					</motion.h1>
					<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text}>
						Custom
					</motion.h1>
					<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text}>
						Software
					</motion.h1>
				</motion.div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.8 } }}>
					<SpinningImage />
				</motion.div>
			</div>
		</div>
	);
};

export default RevealText4;
