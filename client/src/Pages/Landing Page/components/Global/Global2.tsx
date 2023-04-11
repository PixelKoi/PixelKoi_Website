import React from 'react';
import styles from './Global2.module.scss';
import globe from '../../../../assets/Global/globe.svg';
import remote from '../../../../assets/Global/remote.svg';
import tech from '../../../../assets/Global/tech.svg';
import agile from '../../../../assets/Global/agile.svg';
import support from '../../../../assets/Global/support.svg';
import { motion } from 'framer-motion';

const Global2 = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
			viewport={{ once: true }}
			className={styles.container}
		>
			<div className={styles.group2} id={styles.globe}>
				<motion.img
					animate={{ rotate: 360 }}
					transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
					src={globe}
					width={100}
					alt="world"
				/>
				<br />
				<br />
				<h3>Global Network</h3>
				<hr className={styles.line} style={{ color: '#efff' }} />
				<p className={styles.qoute}>
					“Software development is a symphony of creativity and engineering principles.”
				</p>
			</div>

			<motion.div className={styles.pillarContainer}>
				<div className={styles.group} id={styles.pillar1}>
					<div className={styles.pillarGroup}>
						<img src={remote} alt="world" className={styles.img} />
						<p className={styles.imgText}>100% remote</p>
					</div>

					<div className={styles.pillarGroup}>
						<img src={tech} alt="world" className={styles.img} />
						<p className={styles.imgText}>Tech Stack Expertise</p>
					</div>
				</div>

				<div className={styles.group} id={styles.pillar2}>
					<div className={styles.pillarGroup}>
						<img src={agile} alt="world" className={styles.img} />
						<p className={styles.imgText}>Agile Methodology</p>
					</div>

					<div className={styles.pillarGroup}>
						<img src={support} alt="world" className={styles.img} />
						<p className={styles.imgText}> 24/7 Tech Support</p>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Global2;
