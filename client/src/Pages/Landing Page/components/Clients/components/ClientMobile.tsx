import React, { useState } from 'react';
import styles from './ClientMobile.module.scss';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import hype from '../../../../../assets/Clients/hype.webp';
import goodcompany from '../../../../../assets/Clients/goodcompany.webp';
import developpa from '../../../../../assets/Clients/developpa.webp';

const ClientMobile = () => {
	const [ count, setCount ] = useState(0);

	const handleIMG = () => {
		switch (count) {
			case 0:
				return (
					<a href="https://developpa.io/" target="_blank">
						<img src={developpa} className={styles.logoIMG} alt="developpaImage" />
					</a>
				);
			case 1:
				return <img src={goodcompany} className={styles.logoIMG} id={styles.gc} alt="goodcompanyImage" />;
			case 2:
				return (
					<a href="https://www.hypeovernight.com/" target="_blank">
						<img src={hype} className={styles.logoIMG} id={styles.developpa} alt="hypeovernightImage" />
					</a>
				);
			default:
				return (
					<a href="https://developpa.io/" target="_blank">
						<img src={developpa} className={styles.logoIMG} alt="developpaImage" />
					</a>
				);
		}
	};
	return (
		<div>
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
	);
};

export default ClientMobile;
