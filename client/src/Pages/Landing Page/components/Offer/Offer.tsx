import React from 'react';
import styles from './Offer.module.scss';
import { motion } from 'framer-motion';
import { BsArrowRightCircle } from 'react-icons/bs';
import software from '../../../../assets/Home/software.png';
import uxdesign from '../../../../assets/Home/uxdesign.png';

const Offer = () => {
	return (
		<div id="services" className={styles.mainContainer}>
			<div className={styles.container}>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, transition: { duration: 1 } }}
					viewport={{ once: true }}
					className={styles.cta}
				>
					<h3>Software Services</h3>
					<h1>Custom Solutions to Suit You</h1>
					<hr className={styles.break} />
					<br />
					<br />
					<p className={styles.paragraph}>
						Unlocking Your Business Potential: Our Multi-Talented Team of Software Developers, UX Designers,
						and Project Managers Join Forces to Bring Your Vision to Life and Drive Your Business Goals
						Forward.
					</p>

					<a href="#contact" className={styles.link}>
						<BsArrowRightCircle style={{ color: 'orange', alignSelf: 'center' }} size={30} />
						<p style={{ margin: 'auto 0', color: '#fff' }}>Let's Talk</p>
					</a>
				</motion.div>

				<div className={styles.softwareGroup}>
					<div className={styles.catDescription}>
						<h3>Software Engineering</h3>
						<p>
							Our custom software development solutions meet your specific needs and goals, giving you an
							edge over others. Our end-to-end software development services include planning, designing,
							developing, and testing to launching, relieving you of the pressures of handling complex
							SDLCs.
						</p>
						<button className={styles.button}>Learn More</button>
					</div>
					<motion.img
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
						viewport={{ once: true }}
						src={software}
						className={styles.cardIMG}
					/>
				</div>

				<div className={styles.uxGroup}>
					<motion.img
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
						viewport={{ once: true }}
						src={uxdesign}
						className={styles.cardIMG}
					/>
					<div className={styles.catDescription}>
						<h3>UX Design</h3>
						<p>
							Are you looking to work with a team that puts forth a transparent design process and
							delivers spot-on results within budget? Turn to our long-standing design team specializing
							in responsive web and mboile solutions, and UX strategy and consulting.
						</p>
						<button className={styles.button}>Learn More</button>
					</div>
				</div>

				<div className={styles.softwareGroup}>
					<div className={styles.catDescription}>
						<h3>Website Development</h3>
						<p>
							At our company, we specialize in providing comprehensive website development and ecommerce
							solutions to businesses of all sizes. Our team of experienced developers, designers, and
							project managers work together to create custom solutions that meet the unique needs of each
							client.
						</p>
						<button className={styles.button}>Learn More</button>
					</div>
					<motion.img
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
						viewport={{ once: true }}
						src={software}
						className={styles.cardIMG}
					/>
				</div>
			</div>
		</div>
	);
};

export default Offer;
