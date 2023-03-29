import React, { useState } from 'react';
import styles from './FooterMobileContact.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

const FooterMobileContact = () => {
	const [ showLocation, setShowLocation ] = useState(false);
	const [ showInfo, setShowInfo ] = useState(false);
	const [ showSocial, setShowSocial ] = useState(false);

	let currentYear = new Date().getFullYear();
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1, transition: { duration: 1 } }}
			viewport={{ once: true }}
			className={styles.wrapper}
		>
			<div className={styles.container}>
				<div className={styles.consultation}>
					<div onClick={() => (showLocation === false ? setShowLocation(true) : setShowLocation(false))}>
						<div style={{ display: 'flex' }}>
							<h4>OFFICE LOCATIONS</h4>
							{showLocation === false ? (
								<FaPlus className={styles.icon} style={{ marginLeft: 'auto' }} />
							) : (
								<FaMinus className={styles.icon} style={{ marginLeft: 'auto' }} />
							)}
						</div>
						<hr className={styles.break} />
					</div>
					{showLocation === true ? (
						<div className={styles.location}>
							<div className={styles.locationGroup}>
								<div>
									<i style={{ color: '#e8985c' }} className="fa-solid fa-location-dot fa-xl" />
								</div>
								<h4 className={styles.locationText}>Chiang Mai</h4>
							</div>
							<div className={styles.locationGroup}>
								<div>
									<i style={{ color: '#e8985c' }} className="fa-solid fa-location-dot fa-xl" />
								</div>
								<h4 className={styles.locationText}>Toronto</h4>
							</div>
						</div>
					) : null}
				</div>
				<br />
				<div className={styles.linksContainer}>
					<div onClick={() => (showInfo === false ? setShowInfo(true) : setShowInfo(false))}>
						<div style={{ display: 'flex' }}>
							<h4>INFORMATION</h4>
							{showInfo === false ? (
								<FaPlus className={styles.icon} style={{ marginLeft: 'auto' }} />
							) : (
								<FaMinus className={styles.icon} style={{ marginLeft: 'auto' }} />
							)}
						</div>
						<hr className={styles.break} />
					</div>

					{showInfo === true ? (
						<div className={styles.linksWrapper} id={styles.links}>
							<div>
								<Link to="/about" title="Description page for Pixel Koi Company">
									About
								</Link>
							</div>
							<div>
								<Link to="/#services" title="Shows services Pixel Koi Company Provides">
									Services
								</Link>
							</div>
							<div>
								<Link
									to="/contact"
									title="Takes customer to the contact form allowing communication with Pixel Koi Company"
								>
									Contact
								</Link>
							</div>
						</div>
					) : null}
				</div>
				<br />
				<div className={styles.linksContainer}>
					<div onClick={() => (showSocial === false ? setShowSocial(true) : setShowSocial(false))}>
						<div style={{ display: 'flex' }}>
							<h4>SOCIALS</h4>
							{showSocial === false ? (
								<FaPlus className={styles.icon} style={{ marginLeft: 'auto' }} />
							) : (
								<FaMinus className={styles.icon} style={{ marginLeft: 'auto' }} />
							)}
						</div>
						<hr className={styles.break} />
					</div>
					{showSocial === true ? (
						<div className={styles.linksWrapper} id={styles.socials}>
							<div>
								<a
									href="https://www.linkedin.com/company/pixelkoi/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<AiFillLinkedin size={25} />
								</a>
							</div>
						</div>
					) : null}
				</div>
			</div>
			<div className={styles.copyrightContainer}>
				<p className={styles.footerCopyright}>Copyright © {currentYear} Pixel Koi - All Rights Reserved.</p>
			</div>
		</motion.div>
	);
};

export default FooterMobileContact;
