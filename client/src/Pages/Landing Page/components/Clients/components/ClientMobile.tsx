import React, { useState } from 'react';
import styles from './ClientMobile.module.scss';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import ClientCard from './ClientCard';
import hype from '../../../../../assets/Clients/hype.webp';
import goodcompany from '../../../../../assets/Clients/goodcompany.webp';
import developpa from '../../../../../assets/Clients/developpa.webp';

const images = [
	{
		src: hype
	},
	{
		src: goodcompany
	},
	{
		src: developpa
	}
];

const ClientMobile = () => {
	const [ count, setCount ] = useState(0);
	const [ currentIndex, setCurrentIndex ] = useState(0);

	const handlePrevClick = () => {
		setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
	};

	const handleNextClick = () => {
		setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
	};

	const handleIMG = () => {
		switch (count) {
			case 0:
				return (
					<motion.div className={styles.gridItem}>
						<ClientCard img={developpa} style={{ maxWidth: '120px' }} />
					</motion.div>
				);
			case 1:
				return (
					<motion.div className={styles.gridItem}>
						<ClientCard img={goodcompany} style={{ maxWidth: '70px' }} />
					</motion.div>
				);
			case 2:
				return (
					<motion.div className={styles.gridItem}>
						<ClientCard img={hype} style={{ maxWidth: '150px' }} />
					</motion.div>
				);
			default:
				return (
					<motion.div className={styles.gridItem}>
						<ClientCard img={developpa} style={{ maxWidth: '200px' }} />
					</motion.div>
				);
		}
	};
	return (
		<div className={styles.container}>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 1 } }}
				viewport={{ once: true }}
				className={styles.textContainer}
			>
				<motion.h1 className={styles.clientTitle} style={{ color: '#efff' }}>
					<b>Our Clients</b>
				</motion.h1>
				<hr className={styles.break} />
				<br />
				<br />
				<p className={styles.cta}>
					Our clients reside in various nations and use diverse languages, yet our shared aim unites us in our
					efforts..
				</p>
			</motion.div>
			<div className={styles.carousel}>
				<BsFillArrowLeftCircleFill
					className={styles.left}
					size={35}
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
					size={35}
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
	);
};

export default ClientMobile;
