import React, { useState, useContext } from 'react';
import styles from './Team.module.scss';
import Card from './components/Card';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import jonny from '../../../assets/images/slider/jonny.webp';
import garo from '../../../assets/images/slider/garo.webp';
import manny from '../../../assets/images/slider/manny.webp';

import ChatGPT from '../../../assets/images/slider/robothappy.webp';
import { HashContext } from '../../../components/BlurHashEncoder/BlurHashDecoder';

interface ImageType {
	[name: string]: {
		url: string;
		hash: string;
	};
}
const Team = () => {
	const hashData = useContext<ImageType>(HashContext);
	// const jonnyHash = hashData['jonny'].hash;
	// const mannyHash = hashData['manny'].hash;
	// const garoHash = hashData['garo'].hash;
	// const robotHash = hashData['robot'].hash;
	const jonnyH = 'LJLzBPPC.S%1~Vof%Ma}0LV?DjWC';
	const mannyH = 'LdH_utoL?bt7~qayt7WBM{a{M{of';
	const garoH = 'L584DC%300E1iboKyFX80fR*}@xG';
	const robotH = 'LcRD1Wof~WayM{fkxuay%Mj@Rjay';

	const [ currentIndex, setCurrentIndex ] = useState(0);
	const images = [
		{
			src: jonny,
			alt: 'Jonathan Bajada',
			name: 'Jonathan Bajada',
			description: 'Full-Stack Developer/UX Director',
			hash: jonnyH
		},
		{
			src: garo,
			alt: 'Garo Nazarian',
			name: 'Garo Nazarian',
			description: 'Full-Stack Developer/Cloud Engineer',
			hash: mannyH
		},
		{
			src: manny,
			alt: 'Manny ?',
			name: 'Manuel Oshana',
			description: 'Back-end Developer',
			hash: garoH
		},
		{
			src: ChatGPT,
			alt: 'ChatGPT',
			name: 'ChatGPT',
			description: 'Full-Stack Developer',
			hash: robotH
		}
	];
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
							hash={images[currentIndex].hash}
						/>
					</div>
					<BsFillArrowRightCircleFill className={styles.right} size={35} onClick={handleNextClick} />
				</div>
			</div>
			<div className={styles.desktopWrapper}>
				<div className={styles.desktopCard}>
					<Card
						image={images[0].src}
						name={images[0].name}
						description={images[0].description}
						hash={images[0].hash}
					/>
					<Card
						image={images[1].src}
						name={images[1].name}
						description={images[1].description}
						hash={images[1].hash}
					/>
					<Card
						image={images[2].src}
						name={images[2].name}
						description={images[2].description}
						hash={images[2].hash}
					/>
					<Card
						image={images[3].src}
						name={images[3].name}
						description={images[3].description}
						hash={images[3].hash}
					/>
				</div>
			</div>
		</div>
	);
};

export default Team;
