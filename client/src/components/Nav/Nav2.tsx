import React, { useEffect, useRef, useState } from 'react';
import styles from './Nav2.module.scss';
import { Link, useLocation } from 'react-router-dom';
import menu from '../../assets/images/menu.svg';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

const Nav2 = () => {
	const { scrollYProgress } = useScroll();
	const [ open, setOpen ] = useState(false);
	const openMenu = () => {
		setOpen(true);
	};
	const closeMenu = () => {
		setOpen(false);
	};

	//smooth transition for scrolling through divs on landing page
	const location = useLocation();

	useEffect(
		() => {
			if (location.hash) {
				let element = document.getElementById(location.hash.slice(1));
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				} else {
					window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
				}
			}
		},
		[ location ]
	);
	return (
		<div>
			<AnimatePresence>
				{open && (
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<motion.div
							className={styles.menu_container}
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: '100vh', opacity: 1 }}
							transition={{ duration: 0.5 }}
							exit="exit"
						>
							<div className={styles.btn_close} onClick={closeMenu}>
								X
							</div>
							<motion.a
								className={styles.dropdownButtons}
								href=""
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.5 }}
								exit={{ opacity: 0, y: 90, transition: { ease: 'easeInOut', delay: 0.6 } }}
								whileHover={{ scale: 1.3, textShadow: '0px 0px 2px rgb(255,255,255)' }}
							>
								<Link
									onClick={closeMenu}
									id={styles.link1}
									className={`${styles.link} ${styles.hoverUnderlineAnimation}`}
									to="/#team"
								>
									<motion.div>Team</motion.div>
								</Link>
							</motion.a>
							<motion.a
								className={styles.dropdownButtons}
								href=""
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.4 }}
								exit={{ opacity: 0, y: 90, transition: { ease: 'easeInOut', delay: 0.4 } }}
								whileHover={{ scale: 1.3, textShadow: '0px 0px 2px rgb(255,255,255)' }}
							>
								<Link
									onClick={closeMenu}
									id={styles.link2}
									className={`${styles.link} ${styles.hoverUnderlineAnimation}`}
									to="/#work"
								>
									<motion.div>Work</motion.div>
								</Link>
							</motion.a>
							<motion.a
								className={styles.dropdownButtons}
								href=""
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.3 }}
								exit={{ opacity: 0, y: 90, transition: { ease: 'easeInOut', delay: 0.3 } }}
								whileHover={{ scale: 1.3, textShadow: '0px 0px 2px rgb(255,255,255)' }}
							>
								<Link
									onClick={closeMenu}
									id={styles.link3}
									className={`${styles.link} ${styles.hoverUnderlineAnimation}`}
									to="/#services"
								>
									<motion.div>Services</motion.div>
								</Link>
							</motion.a>
							<motion.a
								className={styles.dropdownButtons}
								href=""
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
								exit={{ opacity: 0, y: 90, transition: { ease: 'easeInOut', delay: 0.2 } }}
								whileHover={{ scale: 1.3, textShadow: '0px 0px 2px rgb(255,255,255)' }}
							>
								<Link
									onClick={closeMenu}
									id={styles.link4}
									className={`${styles.link} ${styles.hoverUnderlineAnimation}`}
									to="/contact"
								>
									<motion.div>Contact</motion.div>
								</Link>
							</motion.a>
						</motion.div>
					</div>
				)}
			</AnimatePresence>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 1 } }}
				className={styles.container}
			>
				<Link to="/" className={styles.logo}>
					Pixel Kōi
				</Link>

				<Link id={styles.link1} className={`${styles.link} ${styles.hoverUnderlineAnimation}`} to="/#team">
					<motion.div>About </motion.div>
				</Link>
				<Link id={styles.link2} className={`${styles.link} ${styles.hoverUnderlineAnimation}`} to="/#work">
					<motion.div>Services</motion.div>
				</Link>
				<Link id={styles.link3} className={`${styles.link} ${styles.hoverUnderlineAnimation}`} to="/#services">
					<motion.div>Clients</motion.div>
				</Link>
				<Link id={styles.link4} className={`${styles.link} ${styles.hoverUnderlineAnimation}`} to="/contact">
					<motion.div>Contact</motion.div>
				</Link>
				<button className={styles.menuIMG}>
					<motion.img
						whileHover={{ rotate: 90 }}
						src={menu}
						onClick={openMenu}
						height={30}
						width={30}
						alt="menu"
					/>
				</button>
			</motion.div>
		</div>
	);
};

export default Nav2;
