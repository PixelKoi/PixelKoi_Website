import React, { useState, useRef } from 'react';
import styles from './Card.module.scss';
import { motion } from 'framer-motion';
import hype from '../../../assets/shopifypkoi.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface IProps {
	title: string;
	description: string;
	bgColor: string;
	bgIMG: any;
	webLink: any;
	// technology: string;
}

const Card = (props: IProps) => {
	const backgroundRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;

	const [ startText, setStartText ] = useState(false);
	const [ hovered, setHover ] = useState(false);
	const fadeIn = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 }
	};
	const marqueeVariants = {
		animate: {
			x: [ 0, -800 ],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: 4,
					ease: 'linear'
				}
			}
		}
	};

	return (
		<div className={styles.container}>
			<motion.div
				ref={backgroundRef}
				className={styles.outerCard}
				style={{ backgroundImage: `url(${props.bgIMG})` }}
			>
				<motion.div
					initial={{ opacity: 0 }}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					animate={{ opacity: hovered ? 0.8 : 0 }}
					transition={{ duration: 1 }}
					className={styles.card}
				>
					<div
						className={styles.revealText}
						style={{ backgroundColor: props.bgColor }}
						onMouseOver={() => setStartText(true)}
						onMouseLeave={() => setStartText(false)}
					>
						<motion.h1 animate={startText === true ? 'animate' : undefined} variants={marqueeVariants}>
							{props.title}
						</motion.h1>
					</div>
				</motion.div>
			</motion.div>
			<h1 className={styles.title}>{props.title}</h1>
			<p className={styles.description}>{props.description}</p>

			<a href={`${props.webLink}`} style={{ display: 'flex', alignItems: 'center' }}>
				Go to site{' '}
				<div>
					<ArrowRightIcon style={{ color: '#007bff', fontSize: '1.5rem' }} />
				</div>
			</a>
		</div>
	);
};

export default Card;
