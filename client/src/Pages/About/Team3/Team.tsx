import React, { useState } from 'react';
import carousel_images from '../../../images';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './Team.module.scss';
import Card from './components/Card';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import jonny from '../../../assets/images/slider/jonny.webp';
import garo from '../../../assets/images/slider/garo.webp';

const Team = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.carouselContainer}>
				<BsFillArrowLeftCircleFill className={styles.left} size={35} onClick={() => {}} />
				<div className={styles.carousel}>
					<Card image={jonny} name={'Jonathan Bajada'} />
					<Card image={garo} name={'Garo Bajada'} />
					<Card image={jonny} name={'Jonathan Bajada'} />
					<Card image={garo} name={'Garo Bajada'} />
				</div>
				<BsFillArrowRightCircleFill className={styles.right} size={35} onClick={() => {}} />
			</div>
		</div>
	);
};

export default Team;
