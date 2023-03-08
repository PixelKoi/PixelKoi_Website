import React, { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import './Hamburger.scss';
import { Link } from 'react-router-dom';

const Hamburger = ({ burgerMenu }: any) => {
	let menu = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
	let revealMenuBackground = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
	let revealMenu = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
	let line1 = useRef<HTMLAnchorElement>(null) as React.MutableRefObject<HTMLAnchorElement>;
	let line2 = useRef<HTMLAnchorElement>(null) as React.MutableRefObject<HTMLAnchorElement>;
	let line3 = useRef<HTMLAnchorElement>(null) as React.MutableRefObject<HTMLAnchorElement>;

	useEffect(
		() => {
			console.log(burgerMenu);
			if (burgerMenu.clicked === false) {
				gsap.to([ revealMenu.current, revealMenuBackground.current ], {
					duration: 0.8,
					height: 0,
					ease: 'power3.inOut',
					stagger: {
						amount: 0.07
					}
				});
				gsap.to(menu.current, {
					duration: 1,
					css: { display: 'none' }
				});
			} else if (burgerMenu.initial === true && burgerMenu.clicked === true) {
				gsap.to(menu.current, {
					duration: 0,
					css: { display: 'block' }
				});
				gsap.to([ revealMenu.current, revealMenuBackground.current ], {
					duration: 0,
					opacity: 1,
					height: '100%'
				});
				staggerReveal(revealMenuBackground.current, revealMenu.current);
				staggerText(line1.current, line2.current, line3.current);
			}
		},
		[ burgerMenu ]
	);

	const staggerReveal = (node1: any, node2: any) => {
		gsap.from([ node1, node2 ], {
			duration: 0.8,
			height: 0,
			transformOrigin: 'right top',
			skewY: 2,
			ease: 'power3.inOut',
			stagger: {
				amount: 0.1
			}
		});
	};

	const staggerText = (node1: any, node2: any, node3: any) => {
		gsap.from([ node1, node2, node3 ], {
			duration: 0.8,
			y: 100,
			delay: 0.1,
			ease: 'power3.inOut',
			stagger: {
				amount: 0.3
			}
		});
	};

	const fadeInUp = (node: any) => {
		gsap.from(node, {
			y: 60,
			duration: 1,
			delay: 0.2,
			opacity: 0,
			ease: 'power3.inOut'
		});
	};

	return (
		<div ref={menu} className="hamburger-menu">
			<div ref={revealMenuBackground} className="menu-secondary-background-color" />
			<div ref={revealMenu} className="menu-layer">
				<div className="menu-city-background" />
				<div className="container">
					<div className="wrapper">
						<div className="menu-links">
							<nav>
								<ul>
									<li>
										<Link to={'/about'} ref={line1}>
											Services
										</Link>
									</li>
									<li>
										<Link ref={line2} to="../index.tsx">
											Work
										</Link>
									</li>
									<li>
										<Link ref={line3} to="../index.tsx">
											Contact Us
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hamburger;
