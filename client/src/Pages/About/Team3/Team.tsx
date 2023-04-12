import React from 'react';
import carousel_images from '../../../images';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './Team.module.scss';
const team = () => {
	return (
		<div className={styles.wrapper}>
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
		</div>
	);
};

export default team;
