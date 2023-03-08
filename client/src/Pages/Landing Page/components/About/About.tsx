import React, { useEffect, useRef } from 'react';
import styles from './About.module.scss';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineTeam } from 'react-icons/ai';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));

	const countUp = () => {
		const controls = animate(count, 100, { duration: 2 });
		return controls.stop;
	};
	const random = () => {
		return;
	};
	useEffect(
		() => {
			isInView === true ? countUp() : random();
		},
		[ isInView ]
	);

	return (
		<motion.div ref={ref} className={styles.mainContainer}>
			<div className={styles.contentContainer}>
				<div className={styles.textContainer}>
					<h1>About Us</h1>
					<p>
						Hailing from Toronto, Canada and Chiang Mai, Thailand, we are a team of Full Stack Software
						Developers and UX Designers. Specializing in React, TypeScript, AWS Cloud Engineering and Figma.
					</p>
				</div>
				<div className={styles.infoContainer}>
					<div className={styles.gridItem} id={styles.item1}>
						<div className={styles.cta}>
							<h1>24/7</h1>
							<h3>Availabilty</h3>
						</div>
						<div className={styles.icon}>
							<FiPhoneCall size={50} color={'orange'} />
						</div>
					</div>
					<div className={styles.gridItem} id={styles.item2}>
						<div className={styles.cta}>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<motion.h1>{rounded}</motion.h1>
								<h1>%</h1>
							</div>
							<h3>Full Stack Team</h3>
						</div>
						<div className={styles.icon}>
							<AiOutlineTeam size={60} color={'orange'} />
						</div>
					</div>
					<div className={styles.gridItem} id={styles.item3}>
						<div className={styles.cta}>
							<h1>2 hubs</h1>
							<h3>Canada and Thailand</h3>
						</div>
					</div>
					<div className={styles.gridItem} id={styles.item4}>
						<div className={styles.cta}>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<motion.h1>{rounded}</motion.h1>
								<h1>%</h1>
							</div>

							<h3>AWS Certified</h3>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
function newFunction() {
	let controls: any;
	return controls;
}
