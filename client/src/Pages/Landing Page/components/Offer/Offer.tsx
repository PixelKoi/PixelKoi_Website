import React from 'react';
import styles from './Offer.module.scss';
import { motion } from 'framer-motion';
import { BsArrowRightCircle } from 'react-icons/bs';
import software from '../../../../assets/Home/software.png';
import uxdesign from '../../../../assets/Home/uxdesign.jpg';
import code from '../../../../assets/Home/code.jpg';
import web from '../../../../assets/Home/web.jpg';

import { Link } from 'react-router-dom';

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
						Unlock Your Business Potential: Our versatile team of Software Developers, UX Designers, and
						Project Managers collaborate seamlessly to transform your vision into reality and propel your
						business objectives forward.
					</p>

					<Link to={'/contact'} className={styles.link}>
						<BsArrowRightCircle style={{ color: 'orange', alignSelf: 'center' }} size={30} />
						<p style={{ margin: 'auto 0', color: '#fff' }}>Let's Talk</p>
					</Link>
				</motion.div>

				<div className={styles.softwareGroup}>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, transition: { duration: 1 } }}
						viewport={{ once: true }}
						className={styles.catDescription}
					>
						<h3>Software Engineering</h3>
						<p>
							Our custom software development solutions meet your specific needs and goals, giving you a
							competitive advantage. Our comprehensive end-to-end software development services cover
							everything from planning, designing and developing to testing to launching, relieving you
							from the burden of managing intricate SDLCs.
						</p>
						<Link to={'/contact'} className={styles.link}>
							<BsArrowRightCircle style={{ color: 'orange', alignSelf: 'center' }} size={30} />
							<p style={{ margin: 'auto 0', color: '#fff' }}>Learn More</p>
						</Link>
					</motion.div>
					<motion.img
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
						viewport={{ once: true }}
						src={code}
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
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, transition: { duration: 1 } }}
						viewport={{ once: true }}
						className={styles.catDescription}
					>
						<h3>UX Design</h3>
						<p>
							If you seek a team that values transparent design processes and consistently delivers
							exceptional results within your budget? Turn to our long-standing design team specializing
							in responsive web and mobile solutions, and UX strategy and consulting.
						</p>
						<Link to={'/contact'} className={styles.link}>
							<BsArrowRightCircle style={{ color: 'orange', alignSelf: 'center' }} size={30} />
							<p style={{ margin: 'auto 0', color: '#fff' }}>Learn More</p>
						</Link>
					</motion.div>
				</div>

				<div className={styles.softwareGroup}>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, transition: { duration: 1 } }}
						viewport={{ once: true }}
						className={styles.catDescription}
					>
						<h3>Website Development</h3>
						<p>
							Pixel Koi is dedicated to offering all-encompassing website development and ecommerce
							solutions to businesses of all sizes. Our professional team of developers, designers, and
							project managers collaborate closely to design custom solutions that cater to the unique
							needs of each client.
						</p>
						<Link to={'/contact'} className={styles.link}>
							<BsArrowRightCircle style={{ color: 'orange', alignSelf: 'center' }} size={30} />
							<p style={{ margin: 'auto 0', color: '#fff' }}>Learn More</p>
						</Link>
					</motion.div>
					<motion.img
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
						viewport={{ once: true }}
						src={web}
						className={styles.cardIMG}
					/>
				</div>
			</div>
		</div>
	);
};

export default Offer;
