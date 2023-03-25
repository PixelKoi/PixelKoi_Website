import React from 'react';
import styles from './Footer2.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer2 = () => {
	let currentYear = new Date().getFullYear();
	return (
		<motion.div className={styles.wrapper}>
			<div className={styles.container}>
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
					viewport={{ once: true }}
					className={styles.consultation}
				>
					<h4>GOT A PROJECT IN MIND?</h4>
					<motion.div>
						<a target="_blank" href="mailto:jonathanbajada@pixelkoi.com?subject=Book%20a%20consultation">
							Book a consultation
						</a>
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
					viewport={{ once: true }}
					className={styles.linksContainer}
				>
					<h4>INFORMATION</h4>
					<div className={styles.linksWrapper} id={styles.links}>
						<motion.div>
							<Link to="/about" title="Description page for Pixel Koi Company">
								About
							</Link>
						</motion.div>
						<motion.div>
							<Link to="/#services" title="Shows services Pixel Koi Company Provides">
								Services
							</Link>
						</motion.div>
						<motion.div>
							<Link
								to="/contact"
								title="Takes customer to the contact form allowing communication with Pixel Koi Company"
							>
								Contact
							</Link>
						</motion.div>
					</div>
				</motion.div>
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
					viewport={{ once: true }}
					className={styles.linksContainer}
				>
					<h4>SOCIALS</h4>
					<div className={styles.linksWrapper} id={styles.socials}>
						<motion.div>
							<a
								href="https://www.linkedin.com/company/pixelkoi/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillLinkedin size={25} />
							</a>
						</motion.div>
					</div>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 1 } }}
				viewport={{ once: true }}
				className={styles.copyrightContainer}
			>
				<motion.p className={styles.footerCopyright}>
					Copyright © {currentYear} Pixel Koi - All rights reserved.
				</motion.p>
			</motion.div>
		</motion.div>
	);
};

export default Footer2;
