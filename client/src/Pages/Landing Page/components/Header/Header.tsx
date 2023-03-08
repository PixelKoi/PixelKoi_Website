// import './Header.css';
import React, { useEffect, useRef, useState } from 'react';
import '../../../../styles/globalStyles.css';
import styles from './Header.module.scss';
import RevealText4 from './components/RevealText4';
import OurTech from '../OurTech/OurTech';
import { motion } from 'framer-motion';
import SpinningImage from './components/3Dsquare/SpinningImage';
import Cube from './components/Cube/Cube';
import cube from '../../../../assets/Home/ph_cube.svg';

const Header = (props: any) => {
	//reveals caption text
	const [ headerText, setHeaderText ] = useState();

	const list = { show: { opacity: 1, transition: { staggerChildren: 0.09 } } };
	const item = { show: { y: 0, opacity: 1, transition: { duration: 0.5 } } };
	const handleHeaderText = (component: any, delay: number) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(setHeaderText(() => component));
			}, delay);
		});
	};

	useEffect(() => {
		handleHeaderText(<RevealText4 />, 500);
	}, []);

	return (
		<div className={styles.header} id="header">
			<div className={styles.container}>
				<motion.div initial={{ opacity: 0 }} animate="show" variants={list} className={styles.textContainer}>
					<div className={styles.topText}>
						<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text}>
							We
						</motion.h1>
						<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text}>
							Design
						</motion.h1>
					</div>
					<div className={styles.topText}>
						<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text}>
							Custom
						</motion.h1>
						<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text}>
							Software
						</motion.h1>
					</div>
				</motion.div>
				<div className={styles.cubeIMG}>
					<img src={cube} width={100} />
				</div>
				{/* <motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 0.8 } }}
					className={styles.cube}
				>
					<Cube />
				</motion.div> */}
				<div className={styles.buttonGroup}>
					<button className={styles.button}>Contact</button>
					<button className={styles.button}>Learn More</button>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { delay: 0.5 } }}
				className={styles.techMarq}
			>
				<OurTech />
			</motion.div>
		</div>
	);
};

export default Header;
