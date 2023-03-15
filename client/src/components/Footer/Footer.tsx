import styles from './Footer.module.css';
import { Link, useLocation } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';

const Footer = () => {
	let currentYear = new Date().getFullYear();
	const marqueeVariants = {
		animate: {
			x: [ -240, -1035 ],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: 10,
					ease: 'linear'
				}
			}
		}
	};
	const y = useMotionValue(0);
	const opacity = useTransform(y, [ 0, 300 ], [ 1, 0 ]);
	return (
		<div className={styles.footerContainer}>
			{/* <div className={styles.marquee}>
				<motion.div
					initial="hidden"
					transition={{ duration: 20 }}
					className="track"
					variants={marqueeVariants}
					animate="animate"
				>
					<Link to="/contact" className={styles.linkStyles}>
						<motion.h1 className={styles.checkOut}>
							GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET
							IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET
							IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET IN TOUCH GET
							IN TOUCH
						</motion.h1>
					</Link>

				</motion.div>
			</div> */}
			<motion.div className={styles.footerMain} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} />
			<div className="footer-links d-flex justify-content-center">
				<div className="row no-gutters mx-auto">
					<div className={styles.footerCircles}>
						<i className="fa-solid fa-circle" />
					</div>
					<Link to="/about" className={`${styles.footerLink} ${styles.rowAnchors}`}>
						About
					</Link>
					<div className={styles.footerCircles}>
						<i className="fa-solid fa-circle" />
					</div>
					<Link to="/#services" className={`${styles.footerLink} ${styles.rowAnchors}`}>
						Services
					</Link>
					<div className={styles.footerCircles}>
						<i className="fa-solid fa-circle" />
					</div>
					<Link to="/#work" className={`${styles.footerLink} ${styles.rowAnchors}`}>
						Clients
					</Link>
					<div className={styles.footerCircles}>
						<i className="fa-solid fa-circle" />
					</div>

					<Link to="/contact" className={`${styles.footerLink} ${styles.rowAnchors}`} title="Takes customer to the contact form allowing communication with Pixel Koi Company">
						Contact
					</Link>
				</div>
			</div>
			<div className={styles.instagramDiv}>
				<a className={styles.instagramIcon} href="https://www.linkedin.com/company/pixelkoi/" target="_blank">
					<i className="fab fa-linkedin" />
				</a>
			</div>

			<motion.p
				initial={{ opacity: 0 }}
				style={{ color: '#fff', display: 'block', textAlign: 'center' }}
				className={styles.footerCopyright}
				whileInView={{ opacity: 1 }}
			>
				Copyright © {currentYear} Pixel Koi - All rights reserved.
			</motion.p>
		</div>
	);
};

export default Footer;
