// import './Header.css';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../../../../styles/globalStyles.css';
import styles from './Header.module.scss';
import OurTech from '../OurTech/OurTech';
import { motion } from 'framer-motion';
import SpinningImage from './components/3Dsquare/SpinningImage';
import Cube from './components/Cube/Cube';
import cube from '../../../../assets/Home/ph_cube.svg';
import koi from '../../../../assets/Home/koi.svg';
import { Link, useLocation } from 'react-router-dom';
import headerImg from '../../../../assets/Home/box.webp';
import headerImg2 from '../../../../assets/Home/bg-banner2.png';
import ParticlesBackground from '../../../../components/Particles/ParticlesBackground';
import Particles from 'react-tsparticles';

const Header = (props: any) => {
	const list = { show: { opacity: 1, transition: { staggerChildren: 0.09 } } };
	const item = { show: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

	return (
		<div className={styles.header} id="header" style={{ backgroundImage: `url(${headerImg})` }}>
			<div className={styles.particle}>
				<ParticlesBackground />
			</div>

			<div className={styles.container}>
				<div className={styles.modalContainer}>
					<motion.div
						initial={{ opacity: 0 }}
						animate="show"
						variants={list}
						className={styles.textContainer}
					>
						<div className={styles.headerText}>
							<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text}>
								We Create
							</motion.h1>
						</div>
						<div className={styles.headerText}>
							<motion.h1 initial={{ y: 100, opacity: 0 }} variants={item} className={styles.text}>
								Software Solutions
							</motion.h1>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { delay: 0.9 } }}
						className={styles.buttonGroup}
					>
						<Link
							to={'/contact'}
							title="Takes customer to the contact form allowing communication with Pixel Koi Company"
						>
							<button className={styles.button} id={styles.buttonContact}>
								Contact
							</button>
						</Link>
						<Link to={'#services'}>
							<button className={styles.button}>Learn More</button>
						</Link>
					</motion.div>
				</div>
			</div>
			{/* <div>
				<div
					style={{
						color: '#efff',
						display: 'flex',
						flexDirection: 'column',
						marginLeft: '10rem',
						fontSize: '00px'
					}}
				>
					<h1 className={styles.bannerText}>We Create</h1>
					<h1 className={styles.bannerText}>Software</h1>
					<h1 className={styles.bannerText}>Solutions</h1>
				</div>
			</div> */}
		</div>
	);
};

export default Header;
