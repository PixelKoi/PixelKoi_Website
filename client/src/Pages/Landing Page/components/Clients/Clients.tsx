import React, { useEffect, useRef, useState } from 'react';
import '../../../../styles/globalStyles.css';
import styles from './ClientStyles.module.scss';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import ClientCard from './components/ClientCard';
import ClientLayout from './components/ClientCardLayout';

const Clients = (props: any) => {
	// const {inView, entry, ref} = useInView();
	const y = useMotionValue(0);
	const opacity = useTransform(y, [ 0, 300 ], [ 1, 0 ]);
	const marqueeVariants = {
		animate: {
			// x: [-240, -1035],
			x: [ -1035, -240 ],
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
	return (
		<div>
			{/* <div className={styles.container}>
				<motion.div className="row" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
					<div className="col-12 col-lg-6 icon-style">
						<motion.h3 className={styles.clientTitle} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
							<b>OUR CLIENTS</b>
						</motion.h3>
						<motion.h2 className={styles.cta} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
							Our clients reside in various nations and use diverse languages, yet our shared aim unites
							us in our efforts..
						</motion.h2>
						<motion.p className={styles.titleSection} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
							We believe that cultural diversity presents a continuous chance for self-improvement and an
							abundant source of inspiration for our endeavors.
						</motion.p>
					</div>
				</motion.div>
			</div> */}

			{/* <div className={styles.outerCardContainer}>
				<div className={styles.cardContainer}>
					<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={styles.cardItem}>
						<ClientCard title={'Hype Over Night'} />
					</motion.div>
					<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={styles.cardItem}>
						<ClientCard title={'The Good Company'} />
					</motion.div>
					<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={styles.cardItem}>
						<ClientCard title={'MindFulll'} />
					</motion.div>
					<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={styles.cardItem}>
						<ClientCard title={'Developpa'} />
					</motion.div>
					<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={styles.cardItem}>
						<ClientCard title={'Goblin Digital'} />
					</motion.div>
					<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={styles.cardItem}>
						<ClientCard title={'Coming soon...'} />
					</motion.div>
				</div>
			</div> */}

			<ClientLayout />
			{/* <motion.div className={styles.marqueeOuterContainer} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
				<div className={styles.marquee}>
					<motion.div
						initial="hidden"
						transition={{ duration: 20 }}
						className="track"
						variants={marqueeVariants}
						animate="animate"
					>
						<h1 className={styles.checkOut}>
							OUR WORKS OUR WORKS OUR WORKS OUR WORKS OUR WORKS OUR WORKS OUR WORKS OUR WORKS OUR WORKS
							OUR WORKS OUR WORKS OUR WORKS OUR WORKS OUR WORKS OUR WORKS OUR WORKS
						</h1>
					</motion.div>
				</div>
			</motion.div> */}
		</div>
	);
};
export default Clients;
