import React, { useEffect, useState } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

var styles = {
	bmBurgerButton: {
		position: 'fixed',
		width: '36px',
		height: '30px',
		left: 'auto',
		right: '20px',
		top: '36px'
	},
	bmBurgerBars: {
		background: '#33094D'
	},
	bmBurgerBarsHover: {
		background: '#a90000'
	},
	bmCrossButton: {
		height: '24px',
		width: '24px'
	},
	bmCross: {
		background: '#bdc3c7'
	},
	bmMenuWrap: {
		position: 'fixed',
		height: '100%'
	},
	bmMenu: {
		background: '#33094D',
		padding: '2.5em 1.5em 0',
		fontSize: '1.15em',
		overflow: 'hidden'
	},
	bmMorphShape: {
		fill: '#33094D'
	},
	bmItemList: {
		color: '#b8b7ad',
		padding: '0.8em'
	},
	bmItem: {
		color: 'white',
		marginBottom: '1rem',
		textDecoration: 'none'
	},
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)'
	}
};

const HamNav = () => {
	const location = useLocation();
	const [ isOpen, setOpen ] = useState(false);

	const handleIsOpen = () => {
		setOpen(!isOpen);
	};

	const closeSiderBar = () => {
		setOpen(false);
	};

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
			<Menu right isOpen={isOpen} onClose={handleIsOpen} onOpen={handleIsOpen} styles={styles}>
				<RouterLink
					to="/#header"
					style={{ textDecoration: 'none', fontSize: '24px' }}
					onClick={() => closeSiderBar()}
				>
					Home
				</RouterLink>
				<RouterLink
					to="/#services"
					style={{ textDecoration: 'none', fontSize: '24px' }}
					onClick={() => closeSiderBar()}
				>
					Services
				</RouterLink>
				{/* <RouterLink
					to="/about"
					style={{ textDecoration: 'none', fontSize: '24px' }}
					onClick={() => closeSiderBar()}
				>
					About
				</RouterLink> */}
				<RouterLink
					to="/#contact"
					style={{ textDecoration: 'none', fontSize: '24px' }}
					onClick={() => closeSiderBar()}
				>
					Contact Us
				</RouterLink>
			</Menu>
		</div>
	);
};

export default HamNav;
