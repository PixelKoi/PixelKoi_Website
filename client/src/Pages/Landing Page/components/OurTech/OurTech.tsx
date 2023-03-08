import { FaWordpress, FaReact, FaShopify, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiAdobexd } from 'react-icons/si';
import { DiJava, DiJavascript1 } from 'react-icons/di';
import styles from './OurTech.module.scss';
import { motion } from 'framer-motion';

const OurTech = () => {
	const marqueeVariants = {
		animate: {
			x: [ -240, -1035 ],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: 40,
					ease: 'linear'
				}
			}
		}
	};
	return (
		<main className={styles.container}>
			{/* <h2 className={styles.title}>Technologies</h2> */}

			<motion.div initial="hidden" variants={marqueeVariants} animate="animate" className={styles.iconContainer}>
				<DiJavascript1 />
				<SiTypescript />
				<SiPostgresql />
				<FaReact />
				<FaNodeJs />
				<DiJava />
				<FaFigma />
				<SiAdobexd />
				<FaWordpress />
				<DiJavascript1 />
				<SiTypescript />
				<SiPostgresql />
				<FaReact />
				<FaNodeJs />
				<DiJava />
				<FaFigma />
				<SiAdobexd />
				<FaWordpress />
				<DiJavascript1 />
				<SiTypescript />
				<SiPostgresql />
				<FaReact />
				<FaNodeJs />
				<DiJava />
				<FaFigma />
				<SiAdobexd />
				<FaWordpress />
				<DiJavascript1 />
				<SiTypescript />
				<SiPostgresql />
				<FaReact />
				<FaNodeJs />
				<DiJava />
				<FaFigma />
				<SiAdobexd />
				<FaWordpress />
			</motion.div>
		</main>
	);
};

export default OurTech;

{
	/* <main className={styles.mainContainer}>
<div className={styles.innerContainer}>
	<div className={styles.innerContent}>
	

		<motion.div
			// initial="hidden"
			// variants={marqueeVariants}
			// animate="animate"
			className={styles.iconContainer}
		>
			<DiJavascript1 />
			<SiTypescript />
			<SiPostgresql />
			<FaReact />
			<FaNodeJs />
			<DiJava />
			<FaFigma />
			<SiAdobexd />
			<FaWordpress />
			<FaShopify />
		</motion.div>
	</div>
</div>
</main> */
}
