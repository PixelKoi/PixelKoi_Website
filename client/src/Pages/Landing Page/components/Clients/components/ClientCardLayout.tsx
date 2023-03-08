import React, { useState } from 'react';
import ClientCard from './ClientCard2';
import styles from './ClientCardLayout.module.scss';
import { motion } from 'framer-motion';

const ClientCardLayout = () => {
	const [ isVisible, setIsVisible ] = useState(false);

	return (
		<div id="work" className={styles.mainContainer}>
			<div className={styles.innerContainer}>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, transition: { duration: 1 } }}
					viewport={{ once: true }}
					className={styles.textContainer}
				>
					<motion.h1 className={styles.clientTitle} style={{ color: 'orange' }}>
						<b>Our Clients</b>
					</motion.h1>
					<motion.h2 className={styles.cta}>
						Our clients reside in various nations and use diverse languages, yet our shared aim unites us in
						our efforts..
					</motion.h2>
					<motion.p className={styles.titleSection}>
						We believe that cultural diversity presents a continuous chance for self-improvement and an
						abundant source of inspiration for our endeavors.
					</motion.p>
				</motion.div>
				<div className={styles.cardContainer}>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
						viewport={{ once: true }}
						className={styles.gridItem}
					>
						<ClientCard title={'Hype Over Night'} />
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
						viewport={{ once: true }}
						className={styles.gridItem}
					>
						<ClientCard title={'Goblin Digital'} />
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, transition: { duration: 0.9 } }}
						viewport={{ once: true }}
						className={styles.gridItem}
					>
						<ClientCard title={'Developpa'} />
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, transition: { duration: 1.2 } }}
						viewport={{ once: true }}
						className={styles.gridItem}
					>
						<ClientCard title={'The Good Company'} />
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
						viewport={{ once: true }}
						className={styles.gridItem}
					>
						<ClientCard title={'Disaster Productions'} />
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, transition: { duration: 1.8 } }}
						viewport={{ once: true }}
						className={styles.gridItem}
					>
						<ClientCard title={'Coming soon...'} />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default ClientCardLayout;
