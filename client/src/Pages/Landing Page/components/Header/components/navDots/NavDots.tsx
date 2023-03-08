import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './NavDots.module.scss';

interface IProps {
	to?: any;
	active: boolean;
	onClick: any;
	title: string;
}

const NavDots = (props: IProps) => {
	const [ show, setShow ] = useState(false);

	const fadeIn = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 }
	};

	return (
		<Link
			to={props.to}
			className={styles.container}
			onMouseOver={() => setShow(true)}
			onMouseLeave={() => setShow(false)}
		>
			<h3 className={styles.title} style={{ color: show === true ? '#ffb26b' : 'transparent' }}>
				{props.title}
			</h3>

			<motion.div
				onClick={props.onClick}
				whileHover={{ scale: 1.2, textShadow: '0px 0px 8px rgb(255,255,255)' }}
				transition={{ duration: 2 }}
				variants={fadeIn}
				initial="hidden"
				animate="visible"
				className={styles.dots}
				style={{ backgroundColor: props.active === true ? '#fff' : '#ffb26b' }}
			/>
		</Link>
	);
};

export default NavDots;
