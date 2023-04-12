import React, { useState } from 'react';
import carousel_images from '../../../images';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './Team.module.scss';
import Card from './components/Card';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import jonny from '../../../assets/images/slider/jonny.webp';
import garo from '../../../assets/images/slider/garo.webp';
import robothappy from '../../../assets/images/slider/robothappy.webp';

const images = [
	{ src: jonny, alt: 'Jonathan Bajada', name: 'Jonathan Bajada', description: 'Full-Stack Developer/UX Director' },
	{ src: garo, alt: 'Garo Bajada', name: 'Garo Bajada', description: 'Full-Stack Developer/Cloud Engineer' },
	{ src: robothappy, alt: 'Jonathan Bajada', name: 'Jonathan Bajada', description: 'Full-Stack Developer' }
];

const Team = () => {
	const [ currentIndex, setCurrentIndex ] = useState(0);

	const handlePrevClick = () => {
		setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
	};

	const handleNextClick = () => {
		setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.teamContainer}>
				<div className={styles.teamText}>
					<h3 className={styles.teamTitle}>
						<b>Our Team</b>
					</h3>
					<p className={styles.cta}>
						At our core, we are a team of designers, developers, strategists, and problem-solvers who share
						a collective passion for leveraging the power of technologies, creativity and imagination in
						turn creating enthralling digital experiences that make a positive difference in people's lives.
						Whether we're brainstorming ideas or putting them into action, we work together towards a common
						goal of crafting impactful solutions that resonate with our clients and their users.
					</p>
				</div>
			</div>
			<div className={styles.carouselWrapper}>
				<div className={styles.carouselContainer}>
					<BsFillArrowLeftCircleFill className={styles.left} size={35} onClick={handlePrevClick} />
					<div className={styles.carousel}>
						<Card
							image={images[currentIndex].src}
							name={images[currentIndex].name}
							description={images[currentIndex].description}
						/>
					</div>
					<BsFillArrowRightCircleFill className={styles.right} size={35} onClick={handleNextClick} />
				</div>
			</div>
		</div>
	);
};

export default Team;
