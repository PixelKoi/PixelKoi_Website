import React, { useEffect, useState } from 'react';
import styles from './Nav.module.scss';
import { Link, useLocation } from 'react-router-dom';
import menu from '../../assets/images/menu.svg';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

const Nav = () => {
	const [ hide, setHide ] = useState(false);
	const [ open, setOpen ] = useState(false);
	const openMenu = () => {
		setOpen(true);
	};
	const closeMenu = () => {
		setOpen(false);
	};

	const { scrollYProgress } = useScroll();
	const [ hookedYPostion, setHookedYPosition ] = React.useState(0);
	//smooth transition for scrolling through divs on landing page
	const location = useLocation();

	useEffect(
		() => {
			// hook into the onChange, store the current value as state.
			scrollYProgress.onChange((v) => setHookedYPosition(v));
		},
		[ scrollYProgress ]
	); //make sure to re-subscriobe when scrollYProgress changes

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
							{/* <div className={styles.btn_close} onClick={closeMenu}>
								X
							</div> */}
							<motion.a
								className={styles.dropdownButtons}
								href=""
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.3 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: { ease: 'easeInOut', delay: 0.7 }
								}}
								whileHover={{ textShadow: '0px 0px 2px rgb(255,255,255)' }}
							>
								<Link
									onClick={closeMenu}
									id={styles.link1}
									className={`${styles.link} ${styles.hoverUnderlineAnimation}`}
									to="/about"
								>
									<motion.div>About</motion.div>
								</Link>
							</motion.a>
							<motion.a
								className={styles.dropdownButtons}
								href=""
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.4 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: { ease: 'easeInOut', delay: 0.6 }
								}}
								whileHover={{ textShadow: '0px 0px 2px rgb(255,255,255)' }}
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
								transition={{ delay: 0.7 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: { ease: 'easeInOut', delay: 0.5 }
								}}
								whileHover={{ textShadow: '0px 0px 2px rgb(255,255,255)' }}
							>
								<Link
									onClick={closeMenu}
									id={styles.link2}
									className={`${styles.link} ${styles.hoverUnderlineAnimation}`}
									to="/#work"
								>
									<motion.div>Clients</motion.div>
								</Link>
							</motion.a>

							<motion.a
								className={styles.dropdownButtons}
								href=""
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.9 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: { ease: 'easeInOut', delay: 0.3 }
								}}
								whileHover={{ textShadow: '0px 0px 2px rgb(255,255,255)' }}
							>
								<Link
									onClick={closeMenu}
									id={styles.link3}
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

			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<div style={{ display: 'flex', flexDirection: 'row', marginRight: 'auto' }}>
					<motion.div
						initial={{
							opacity: 0,
							boxShadow: 'none',
							borderBottom: '1px solid hsla(0, 0%, 100%, 0.12)',
							backgroundColor: 'transparent'
						}}
						animate={{
							backgroundColor: hookedYPostion > 0 ? '#17212d' : 'transparent',
							borderBottom: hookedYPostion > 0 ? '1px solid hsla(0, 0%, 100%, 0.12)' : 'none',
							// boxShadow: hookedYPostion > 0 ? '0px 0px 7px 0px rgba(255, 255, 255, 0.1)' : 'none',
							opacity: 1,
							transition: { duration: 1 }
						}}
						className={styles.container}
					>
						<Link to="/#header" className={styles.logo}>
							Pixel Kōi
						</Link>

						<Link
							id={styles.link1}
							className={`${styles.link} ${styles.hoverUnderlineAnimation}`}
							to="/about"
						>
							<motion.div>About </motion.div>
						</Link>
						<Link
							id={styles.link2}
							className={`${styles.link} ${styles.hoverUnderlineAnimation}`}
							to="/#services"
						>
							<motion.div>Services</motion.div>
						</Link>
						<Link
							id={styles.link3}
							className={`${styles.link} ${styles.hoverUnderlineAnimation}`}
							to="/#work"
						>
							<motion.div>Clients</motion.div>
						</Link>
						<Link
							id={styles.link3}
							className={`${styles.link} ${styles.hoverUnderlineAnimation}`}
							to="/blog"
						>
							<motion.div>Blog</motion.div>
						</Link>
						{/* <button className={styles.menuIMG}>
						<motion.img
							whileHover={{ rotate: 90 }}
							src={menu}
							onClick={openMenu}
							height={30}
							width={30}
							alt="menu"
						/>
					</button> */}
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 1 } }}
					className={styles.container3}
				>
					<motion.div className={styles.contactInfo}>
						<motion.p style={{ display: hide === true ? 'none' : 'inline' }}>
							Email: info@pixelkoi.com <br />
							Phone: (647)-838-1705
						</motion.p>
					</motion.div>
					<Link
						id={styles.link4}
						className={`${styles.link} `}
						style={{ display: hide === true ? 'none' : 'inline' }}
						to="/contact"
					>
						<motion.p>Hire Us</motion.p>
					</Link>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1 } }}
						className={styles.menuContainer}
					>
						<button className={styles.menuIMG}>
							<motion.img
								src={menu}
								onClick={() => {
									if (open === false) {
										openMenu();
										setHide(true);
									} else {
										closeMenu();
										setTimeout(() => {
											setHide(false);
										}, 1000);
									}
								}}
								height={28}
								width={28}
								alt="menu"
							/>
						</button>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
};

export default Nav;
