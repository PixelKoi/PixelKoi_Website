import React from 'react';
import styles from './Global2.module.scss';
import globe from '../../../../assets/Global/globe.svg';
import remote from '../../../../assets/Global/remote.svg';
import tech from '../../../../assets/Global/tech.svg';
import agile from '../../../../assets/Global/agile.svg';
import support from '../../../../assets/Global/support.svg';

const Global2 = () => {
	return (
		<div className={styles.container}>
			<div className={styles.group} id={styles.globe}>
				<img src={globe} alt="world" className={styles.globe} />
				<hr className={styles.line} />
				<p className={styles.qoute}>
					“Software development is a symphony of creativity and engineering principles.”
				</p>
			</div>
			<div className={styles.group} id={styles.pillar1}>
				<div className={styles.pillarGroup}>
					<img src={remote} alt="world" className={styles.img} />
					<p className={styles.imgText}>100% remote</p>
				</div>
				<br />
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
				<br />
				<div className={styles.pillarGroup}>
					<img src={support} alt="world" className={styles.img} />
					<p className={styles.imgText}> 24/7 Tech Support</p>
				</div>
			</div>
		</div>
	);
};

export default Global2;
