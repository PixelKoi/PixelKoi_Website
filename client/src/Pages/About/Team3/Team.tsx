import React, { useState } from 'react';
import carousel_images from '../../../images';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './Team.module.scss';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Team = () => {
	const [ count, setCount ] = useState(0);

	return (
		<div className={styles.wrapper}>
			<div className={styles.carouselContainer}>
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
				<div className={styles.carousel}>
					{carousel_images.map((image) => {
						return (
							<motion.div className={styles.card}>
								<img className={styles.imageScale} src={image.src} alt={image.alt} />
								<div className={styles.imageText}>
									<h6>
										<b>{image.name}</b>
									</h6>
									<p className={styles.imagep}>{image.description}</p>
								</div>
							</motion.div>
						);
					})}
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

export default Team;
