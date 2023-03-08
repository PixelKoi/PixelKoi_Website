import React from 'react';
import styles from './Offer.module.scss';
import Piller from './components/Piller';
import { motion } from 'framer-motion';

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
				</motion.div>
				<div className={styles.pillerContainer}>
					<Piller
						title={'Software Engineering'}
						description={'Build cutting-edge software with our expert engineering solutions.'}
						option={3}
					/>
					<Piller
						title={'UX Design'}
						description={'Transform user experiences with our expert UX design solutions.'}
						option={2}
					/>
					<Piller
						title={'Website Development'}
						description={'Bring your website vision to life with our expert development solutions.'}
						option={1}
					/>
					<Piller
						title={'E-commerce'}
						description={
							'Create a seamless online shopping experience with our expert ecommerce development solutions.'
						}
						option={4}
					/>
				</div>
			</div>
		</div>
	);
};

export default Offer;
