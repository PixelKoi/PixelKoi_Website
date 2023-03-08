import { useEffect, useRef, useState } from 'react';
import '../../../../styles/globalStyles.css';
import styles from './TeamStyles.module.scss';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import carousel_images from './../../../../images';

interface ImageType {
	src: string;
}

const images: ImageType[] = [
	{ src: 'https://image1.jpg' },
	{ src: 'https://image2.jpg' },
	{ src: 'https://image3.jpg' },
	{ src: 'https://image4.jpg' }
];

const Team = (props: any) => {
	const [ width, setWidth ] = useState(0);
	const carousel: any = useRef(10);
	const y = useMotionValue(0);
	const opacity = useTransform(y, [ 0, 300 ], [ 1, 0 ]);
	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	});
	return (
		<div id="team" className={styles.container}>
			<div className={styles.teamContainer}>
				<div className={styles.teamText}>
					<motion.h1 className={styles.teamTitle} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
						<b>Our Team</b>
					</motion.h1>
					<motion.h2 className={styles.cta} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
						Our team comprises of designers, developers, strategists, and problem-solvers united by a common
						aspiration: utilizing the strength of creativity and imagination to craft digital experiences
						that positively impact people's lives.
					</motion.h2>
				</div>

				<motion.div
					ref={carousel}
					className={styles.carousel}
					whileTap={{ cursor: 'grabbing' }}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
				>
					<motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={styles.innerCarousel}>
						{carousel_images.map((image) => {
							return (
								<motion.div className={styles.item}>
									<img className={styles.imageScale} src={image.src} alt="" />
									<div className={styles.imageText}>
										<h6>
											<b>{image.name}</b>
										</h6>
										<p className={styles.imagep}>{image.description}</p>
									</div>
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Team;
