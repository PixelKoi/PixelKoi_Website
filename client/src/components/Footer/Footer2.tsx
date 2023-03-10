import React from 'react';
import styles from './Footer2.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer2 = () => {
	let currentYear = new Date().getFullYear();
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
			viewport={{ once: true }}
			className={styles.wrapper}
		>
			<div className={styles.container}>
				<div className={styles.consultation}>
					<h4>GOT A PROJECT IN MIND?</h4>
					<a href="mailto:jonathanbajada@pixelkoi.com?subject=Book%20a%20consultation">Book a consultation</a>
				</div>
				<div className={styles.linksContainer}>
					<h4>INFORMATION</h4>
					<div className={styles.linksWrapper} id={styles.links}>
						<Link to="/about">About</Link>
						<Link to="/#services">Services</Link>
						<Link to="/contact">Contact</Link>
					</div>
				</div>
				<div className={styles.linksContainer}>
					<h4>SOCIALS</h4>
					<div className={styles.linksWrapper} id={styles.socials}>
						<a href="https://www.linkedin.com/company/pixelkoi/" target="_blank" rel="noopener noreferrer">
							<AiFillLinkedin size={25} />
						</a>
					</div>
				</div>
			</div>
			<div className={styles.copyrightContainer}>
				<motion.p className={styles.footerCopyright}>
					Copyright © {currentYear} Pixel Koi - All rights reserved.
				</motion.p>
			</div>
		</motion.div>
	);
};

export default Footer2;
