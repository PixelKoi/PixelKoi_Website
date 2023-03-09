import React from 'react';
import styles from './Footer2.module.scss';
import { motion } from 'framer-motion';

const Footer2 = () => {
	let currentYear = new Date().getFullYear();
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.consultation}>
					<h3>Got a project in mind?</h3>
					<a>Book A Free Consultation</a>
				</div>
				<div className={styles.linksContainer}>
					<h4>Links</h4>
					<div className={styles.linksWrapper}>
						<a>About</a>
						<a>Services</a>
						<a>Contact</a>
					</div>
				</div>
				<div className={styles.linksContainer}>
					<h4>Socials</h4>
					<div className={styles.linksWrapper}>
						<a>LinkedIn</a>
					</div>
				</div>
			</div>
			<div className={styles.copyrightContainer}>
				<motion.p
					initial={{ opacity: 0 }}
					style={{ color: '#fff', display: 'block', textAlign: 'center' }}
					className={styles.footerCopyright}
					whileInView={{ opacity: 1 }}
				>
					Copyright © {currentYear} Pixel Koi - All rights reserved.
				</motion.p>
			</div>
		</div>
	);
};

export default Footer2;
