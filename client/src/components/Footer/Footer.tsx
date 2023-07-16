import React from 'react';
import FooterMobile from './components/FooterMobile';
import FooterDesktop from './components/FooterDesktop';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<div>
			<div className={styles.footerDesktop}>
				<FooterDesktop />
			</div>
			<div className={styles.footerMobile}>
				<FooterMobile />
			</div>
		</div>
	);
};

export default Footer;
