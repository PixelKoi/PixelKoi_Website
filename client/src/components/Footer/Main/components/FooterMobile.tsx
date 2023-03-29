import React, { useState } from 'react';
import styles from './FooterMobile.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

const FooterMobileContact = () => {
	const [ showInfo, setShowInfo ] = useState(false);
	const [ showSocial, setShowSocial ] = useState(false);

	let currentYear = new Date().getFullYear();
	return (
		<motion.div
			initial={{ y: 20, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
			viewport={{ once: true }}
			className={styles.wrapper}
		>
			<div className={styles.container}>
				<div className={styles.consultation}>
					<h4>GOT A PROJECT IN MIND?</h4>
					<div>
						<a target="_blank" href="mailto:jonathanbajada@pixelkoi.com?subject=Book%20a%20consultation">
							Book a consultation
						</a>
					</div>
				</div>
				<br />
				<div className={styles.linksContainer}>
					<div style={{ display: 'flex' }}>
						<h4>INFORMATION</h4>
						{showInfo === false ? (
							<FaPlus
								className={styles.icon}
								style={{ marginLeft: 'auto' }}
								onClick={() => setShowInfo(true)}
							/>
						) : (
							<FaMinus
								className={styles.icon}
								style={{ marginLeft: 'auto' }}
								onClick={() => setShowInfo(false)}
							/>
						)}
					</div>
					<hr className={styles.break} />
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
					<div style={{ display: 'flex' }}>
						<h4>SOCIALS</h4>
						{showSocial === false ? (
							<FaPlus
								className={styles.icon}
								style={{ marginLeft: 'auto' }}
								onClick={() => setShowSocial(true)}
							/>
						) : (
							<FaMinus
								className={styles.icon}
								style={{ marginLeft: 'auto' }}
								onClick={() => setShowSocial(false)}
							/>
						)}
					</div>
					<hr className={styles.break} />
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
