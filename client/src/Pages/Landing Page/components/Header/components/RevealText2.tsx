import React, { useEffect, useRef, useState } from 'react';
import styles from './RevealText2.module.scss';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

const RevealText = () => {
	const [ currentIMG, setCurrentIMG ] = useState(styles.imgCard);
	let line1 = useRef<HTMLHeadingElement>(null) as React.MutableRefObject<HTMLHeadingElement>;
	let line2 = useRef<HTMLHeadingElement>(null) as React.MutableRefObject<HTMLHeadingElement>;
	let line3 = useRef<HTMLHeadingElement>(null) as React.MutableRefObject<HTMLHeadingElement>;
	let line4 = useRef<HTMLHeadingElement>(null) as React.MutableRefObject<HTMLHeadingElement>;

	useEffect(() => {}, []);

	const list = { show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
	const item = { show: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

	const handleIMG = () => {
		return (
			<motion.div
				initial={{ x: 400, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 1, duration: 0.4 }}
				className={currentIMG}
			/>
		);
	};

	return (
		<div className={styles.header} id="header">
			<motion.div initial={{ opacity: 0 }} animate="show" variants={list} className={styles.headerText}>
				<motion.h1
					onMouseOver={() => setCurrentIMG(styles.imgCard2)}
					onMouseLeave={() => setCurrentIMG(styles.imgCard)}
					initial={{ y: 100, opacity: 0 }}
					variants={item}
					ref={line1}
					id="headerCaption1"
					className={styles.headerCaption}
				>
					Software Development
				</motion.h1>
				<motion.h1
					onMouseOver={() => setCurrentIMG(styles.imgCard3)}
					onMouseLeave={() => setCurrentIMG(styles.imgCard)}
					initial={{ y: 100, opacity: 0 }}
					variants={item}
					ref={line2}
					id="headerCaption2"
					className={styles.headerCaption}
				>
					Website Development
				</motion.h1>
				<motion.h1
					onMouseOver={() => setCurrentIMG(styles.imgCard4)}
					onMouseLeave={() => setCurrentIMG(styles.imgCard)}
					initial={{ y: 100, opacity: 0 }}
					variants={item}
					ref={line3}
					id="headerCaption3"
					className={styles.headerCaption}
				>
					Cloud Engineering
				</motion.h1>
				<motion.h1
					onMouseOver={() => setCurrentIMG(styles.imgCard2)}
					onMouseLeave={() => setCurrentIMG(styles.imgCard)}
					initial={{ y: 100, opacity: 0 }}
					variants={item}
					ref={line4}
					id="headerCaption4"
					className={styles.headerCaption}
				>
					E-commerce
				</motion.h1>
			</motion.div>
			{handleIMG()}
		</div>
	);
};

export default RevealText;
