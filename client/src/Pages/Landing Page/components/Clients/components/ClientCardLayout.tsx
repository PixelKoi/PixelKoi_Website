import React, { useState } from 'react';
import ClientCard from './ClientCard2';
import styles from './ClientCardLayout.module.scss';
import { motion } from 'framer-motion';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import hype from '../../../../../assets/Clients/hype.png';
import goodcompany from '../../../../../assets/Clients/goodcompany.png';
import developpa from '../../../../../assets/Clients/developpa.png';

const ClientCardLayout = () => {
	const [ count, setCount ] = useState(0);

	const handleIMG = () => {
		switch (count) {
			case 0:
				return (
					<a href="https://hypeovernight.com" target="_blank">
						<img src={hype} className={styles.logoIMG} />
					</a>
				);
			case 1:
				return <img src={goodcompany} className={styles.logoIMG} id={styles.gc} />;
			case 2:
				return (
					<a href="https://developpa.io/" target="_blank">
						<img src={developpa} className={styles.logoIMG} id={styles.developpa} />
					</a>
				);
			default:
				return <img src={hype} className={styles.logoIMG} />;
		}
	};

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
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, transition: { duration: 1 } }}
					viewport={{ once: true }}
					className={styles.cardContainer}
				>
					<a href="https://hypeovernight.com" target="_blank">
						<motion.div className={styles.gridItem}>
							<ClientCard img={hype} style={{ maxWidth: '200px' }} />
						</motion.div>
					</a>
					<a href="https://hypeovernight.com" target="_blank">
						<motion.div className={styles.gridItem}>
							<ClientCard img={goodcompany} style={{ maxWidth: '100px' }} />
						</motion.div>
					</a>
					<a href="https://developpa.io" target="_blank">
						<motion.div className={styles.gridItem}>
							<ClientCard img={developpa} style={{ maxWidth: '200px' }} />
						</motion.div>
					</a>
				</motion.div>
				<div className={styles.carousel} style={{ marginTop: '4rem' }}>
					<BsFillArrowLeftCircleFill
						className={styles.left}
						size={40}
						onClick={() => {
							if (count === 0) {
								setCount(2);
							} else if (count === 2) {
								setCount(1);
							} else if (count === 1) {
								setCount(0);
							}
						}}
					/>
					<div className={styles.iconContainer}>
						<motion.div>{handleIMG()}</motion.div>
					</div>
					<BsFillArrowRightCircleFill
						className={styles.right}
						size={40}
						onClick={() => {
							if (count === 0) {
								setCount(1);
							} else if (count === 1) {
								setCount(2);
							} else if (count === 2) {
								setCount(0);
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ClientCardLayout;
