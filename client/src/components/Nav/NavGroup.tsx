import React from 'react';
import Nav from './Nav';
import styles from './NavGroup.module.scss';
import { useScroll, motion } from 'framer-motion';

const NavGroup = () => {
	const { scrollYProgress } = useScroll();

	return (
		<div className={styles.wrapper}>
			<Nav />
			{/* <motion.div style={{ scaleX: scrollYProgress }} className={styles.break} /> */}
		</div>
	);
};

export default NavGroup;
