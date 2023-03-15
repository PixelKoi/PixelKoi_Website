import styles from './Nav.module.scss';
import React, { useEffect, useState, useRef } from 'react';
import menu from '../../assets/images/menu.svg';
import Hamburger from './Hamburger/Hamburger';
import { gsap } from 'gsap';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

export interface NavProps {
	currentTarget: EventTarget;
}

const Nav = (props: any) => {
	const [ showDrop, setDropDown ] = useState(false);
	const [ bgColor, setBGColor ] = useState('');
	const [ bgColor2, setBGColor2 ] = useState('');
	const [ borderColor, setBColor ] = useState('');
	const [ textColor, setTextColor ] = useState('');
	const [ textColor2, setTextColor2 ] = useState('');
	const [ hideIcon, setHide ] = useState('');
	const [ scrollActive, setScrollAtive ] = useState(false);
	const [ aboutPage, setAboutPage ] = useState(false);
	const [ items, setItems ] = useState([]);
	const location = useLocation();

	const [ open, setOpen ] = useState(false);
	const openMenu = () => {
		setOpen(true);
	};
	const closeMenu = () => {
		setOpen(false);
	};

	//left nav hooks
	const [ leftNavPosition, setLeftNavPosition ] = useState('fixed');

	//references
	let rightNav = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
	let leftNav = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
	let homeRef = useRef<HTMLAnchorElement>(null) as React.MutableRefObject<HTMLAnchorElement>;
	let menuButton = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>;
	let menuLogo = useRef<HTMLAnchorElement>(null) as React.MutableRefObject<HTMLAnchorElement>;
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
	//states for ham nav child component
	const [ burgerMenu, setMenuState ] = useState({
		initial: false,
		showMenu: false,
		clicked: false
	});

	const handleHideRightNav = () => {
		if (window.scrollY > 30) {
			gsap.to(rightNav.current, {
				y: -40,
				duration: 0.1,
				opacity: 0,
				ease: 'power1.inOut'
			});
		} else if (window.scrollY < 30) {
			gsap.to(rightNav.current, {
				y: 0,
				duration: 0.1,
				opacity: 1,
				ease: 'power1.inOut'
				// css: { display: 'flex' }
			});
		}
	};

	const handleHamMenu = () => {
		//turn it on first
		if (burgerMenu.initial === false) {
			setMenuState({
				initial: true,
				showMenu: true,
				clicked: true
			});
		} else if (burgerMenu.initial === true && burgerMenu.clicked === true) {
			setMenuState({
				initial: true,
				showMenu: false,
				clicked: false
			});
		} else if (burgerMenu.initial === true && burgerMenu.clicked === false) {
			setMenuState({
				initial: true,
				showMenu: true,
				clicked: true
			});
		}
	};

	//smooth transition for scrolling through divs on landing page
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

	//hide right nav on scroll
	useEffect(() => {
		handleHideRightNav();
		window.addEventListener('scroll', handleHideRightNav, { passive: true });
		return () => window.removeEventListener('scroll', handleHideRightNav);
	}, []);

	return (
		<div className={styles.navMain}>
			<div
				className={`${styles.innerContainer} ${styles.container} ${styles.containerFluid}`}
				onMouseLeave={() => {
					setDropDown(false);
				}}
			>
				<div className={styles.leftNav} ref={leftNav}>
					<button
						ref={menuButton}
						onMouseOver={() => {
							gsap.to(menuButton.current, {
								duration: 0.2,
								y: 3,
								skewX: 4,
								ease: 'power1.inOut'
							});
						}}
						onMouseLeave={() => {
							gsap.to(menuButton.current, {
								duration: 0.2,
								y: 0,
								skewX: 0,
								ease: 'power1.inOut'
							});
						}}
						onClick={() => handleHamMenu()}
						className={styles.menuButton}
						style={{}}
					>
						<img className={styles.menuIMG} height={40} width={45} src={menu} alt="menu" />
					</button>
					<RouterLink
						ref={menuLogo}
						onMouseOver={() => {
							gsap.to(menuLogo.current, {
								duration: 0.2,
								y: 3,
								skewX: 4,
								ease: 'power1.inOut'
							});
						}}
						onMouseLeave={() => {
							gsap.to(menuLogo.current, {
								duration: 0.2,
								y: 0,
								skewX: 0,
								ease: 'power1.inOut'
							});
						}}
						onClick={() => handleHamMenu()}
						to="/"
						className={styles.logo}
						style={{ alignSelf: 'center', textDecoration: 'none', display: hideIcon }}
					>
						<motion.span
							className={styles.logoText}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
						>
							Pixel Kōi
						</motion.span>
					</RouterLink>
				</div>
				<div ref={rightNav} className={styles.rightNav} style={{ backgroundColor: bgColor }}>
					<div
						style={{ alignSelf: 'center' }}
						onMouseOver={() => {
							setDropDown(false);
						}}
					>
						<RouterLink
							ref={homeRef}
							onClick={() => setAboutPage(false)}
							to="#team"
							className={styles.navButton}
							style={{ alignSelf: 'center', textDecoration: 'none', color: textColor }}
						>
							<motion.div
								className={styles.hoverUnderlineAnimation}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1 }}
							>
								TEAM
							</motion.div>
						</RouterLink>
					</div>
					<div
						style={{ alignSelf: 'center' }}
						onMouseOver={() => {
							setDropDown(false);
						}}
					>
						<RouterLink
							ref={homeRef}
							onClick={() => setAboutPage(false)}
							to="#work"
							className={styles.navButton}
							style={{ alignSelf: 'center', textDecoration: 'none', color: textColor }}
						>
							<motion.div
								className={styles.hoverUnderlineAnimation}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1 }}
							>
								WORK
							</motion.div>
						</RouterLink>
					</div>
					<div style={{ alignSelf: 'center', padding: '1rem' }}>
						<div onMouseOver={() => setDropDown(true)}>
							<RouterLink
								onClick={() => setAboutPage(false)}
								to="#services"
								className={styles.navButton}
								style={{ alignSelf: 'center', textDecoration: 'none', color: textColor }}
							>
								<motion.div
									className={styles.hoverUnderlineAnimation}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1 }}
								>
									SERVICES
								</motion.div>
							</RouterLink>
						</div>
					</div>

					<RouterLink to="/contact" title="Routes customer to Pixel Koi Company contact form" style={{ alignSelf: 'center', textDecoration: 'none' }}>
						<button
							onMouseEnter={() => {
								if (scrollActive === true) {
									setBGColor2('#33094d');
									setTextColor2('white');
								}
							}}
							onMouseLeave={() => {
								if (scrollActive === true) {
									setBGColor2('white');
									setTextColor2('#33094d');
								}
							}}
							style={{ color: textColor2, borderColor: borderColor, backgroundColor: bgColor2 }}
							onMouseOver={() => {
								setDropDown(false);
							}}
							className={styles.navButtonContact}
						>
							<div>CONTACT US</div>
						</button>
					</RouterLink>
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

			</div>
		</div>
	);
};

export default Nav;
