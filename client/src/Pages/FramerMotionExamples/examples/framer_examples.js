import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import styles from './framer_examples.module.scss';
import Typewriter from 'typewriter-effect/dist/core';

const FramerExamples = () => {
	const [ open, setOpen ] = useState(false);
	const openMenu = () => {
		setOpen(true);
	};
	const closeMenu = () => {
		setOpen(false);
	};

	const x = useMotionValue(0);
	const [ text, setText ] = useState('CHECK OUT OUR WORKS!');
	const typewriterRef = useRef(null);
	const fadeIn = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 }
	};
	const marqueeVariants = {
		animate: {
			x: [ 0, -1035 ],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: 5,
					ease: 'linear'
				}
			}
		}
	};

	useEffect(() => {
		const typist = new Typewriter(typewriterRef.current, {
			loop: true
		});

		typist.typeString("Hello, Let's Get In Touch!").pauseFor(2500).deleteAll().start();
	}, []);

	// motion Animations 😈😈
	const item = {
		exit: {
			opacity: 0,
			height: 0,
			transition: {
				ease: 'linear',
				duration: 0.3,
				delay: 1
			}
		}
	};
	return (
		<div className={styles.container}>
			<header>
				<div className={styles.menu}>
					<motion.div
						whileHover={{ scale: 1.5, textShadow: '0px 0px 8px rgb(255,255,255)' }}
						variants={fadeIn}
						initial="hidden"
						animate="visible"
						transition={{ duration: 1 }}
						className={styles.companyLogo}
					>
						<h2>Pixel Kōi</h2>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.5, textShadow: '0px 0px 8px rgb(255,255,255)' }}
						variants={fadeIn}
						initial="hidden"
						animate="visible"
						transition={{ duration: 4 }}
					>
						HOME
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.5, textShadow: '0px 0px 8px rgb(255,255,255)' }}
						variants={fadeIn}
						initial="hidden"
						animate="visible"
						transition={{ duration: 5 }}
					>
						SERVICES
					</motion.div>
					<motion.div
						initial="hidden"
						animate={{ scale: [ 1, 1.2, 1 ] }}
						transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', loop: Infinity }}
						whileHover={{ scale: 1.2, textShadow: '0px 0px 8px rgb(255,255,255)' }}
						whileTap={{ scale: 0.9 }}
					>
						CONTACT US
					</motion.div>
					<motion.div
						variants={fadeIn}
						initial="hidden"
						animate="visible"
						transition={{ duration: 6 }}
						whileHover={{ scale: 1.5, textShadow: '0px 0px 8px rgb(255,255,255)' }}
					>
						WORKS
					</motion.div>

					<motion.i
						variants={fadeIn}
						initial="hidden"
						animate="visible"
						transition={{ duration: 6 }}
						onClick={openMenu}
						whileHover={{
							scale: 1.3,
							textShadow: '0px 0px 8px rgb(255,255,255)'
						}}
						className="fa-solid fa-bars fa-2xl"
					/>
				</div>
				<div className={styles.marquee}>
					<motion.div
						initial="hidden"
						transition={{ duration: 4 }}
						className="track"
						variants={marqueeVariants}
						animate="animate"
					>
						<motion.h1 className={styles.checkOut}>
							CHECK OUT OUR WORKS BELOW! CHECK OUT OUR WORKS BELOW! CHECK OUT OUR WORKS BELOW! CHECK OUT
							OUR WORKS BELOW! CHECK OUT OUR WORKS BELOW!
						</motion.h1>
					</motion.div>
				</div>
			</header>
			<div className={styles.scrollNavigation}>
				<motion.li
					whileHover={{ scale: 1.2, textShadow: '0px 0px 8px rgb(255,255,255)' }}
					variants={fadeIn}
					initial="hidden"
					animate="visible"
					className={styles.dots}
				/>
				<motion.li
					whileHover={{ scale: 1.2, textShadow: '0px 0px 8px rgb(255,255,255)' }}
					variants={fadeIn}
					initial="hidden"
					animate="visible"
					className={styles.dots}
				/>
				<motion.li
					whileHover={{ scale: 1.2, textShadow: '0px 0px 8px rgb(255,255,255)' }}
					variants={fadeIn}
					initial="hidden"
					animate="visible"
					className={styles.dots}
				/>
				<motion.li
					whileHover={{ scale: 1.2, textShadow: '0px 0px 8px rgb(255,255,255)' }}
					variants={fadeIn}
					initial="hidden"
					animate="visible"
					className={styles.dots}
				/>
			</div>

			<AnimatePresence>
				{open && (
					<motion.div
						className={styles.menu_container}
						variants={item}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: '100vh', opacity: 1 }}
						transition={{ duration: 0.5 }}
						exit="exit"
					>
						<div className={styles.btn_close} onClick={closeMenu}>
							X
						</div>
						<motion.a
							href=""
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.9 }}
							exit={{ opacity: 0, y: 90, transition: { ease: 'easeInOut', delay: 0.8 } }}
							whileHover={{ scale: 1.3, textShadow: '0px 0px 2px rgb(255,255,255)' }}
						>
							HOME
						</motion.a>
						<motion.a
							href=""
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.8 }}
							exit={{ opacity: 0, y: 90, transition: { ease: 'easeInOut', delay: 0.5 } }}
							whileHover={{ scale: 1.3, textShadow: '0px 0px 2px rgb(255,255,255)' }}
						>
							SERVICES
						</motion.a>
						<motion.a
							href=""
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.6 }}
							exit={{ opacity: 0, y: 90, transition: { ease: 'easeInOut', delay: 0.4 } }}
							whileHover={{ scale: 1.3, textShadow: '0px 0px 2px rgb(255,255,255)' }}
						>
							CONTACT US
						</motion.a>
						<motion.a
							href=""
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4 }}
							exit={{ opacity: 0, y: 90, transition: { ease: 'easeInOut', delay: 0.2 } }}
							whileHover={{ scale: 1.3, textShadow: '0px 0px 2px rgb(255,255,255)' }}
						>
							WORKS
						</motion.a>
					</motion.div>
				)}
			</AnimatePresence>
			<div className={styles.headerText}>
				<h3 ref={typewriterRef}>Let's Get in Touch :)</h3>
			</div>
			<div className={styles.content_wrapper}>
				<p> center text</p>
			</div>
		</div>
	);
};

export default FramerExamples;
