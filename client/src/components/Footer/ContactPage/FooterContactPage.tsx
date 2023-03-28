import React from 'react';
import FooterMobileContact from './components/FooterMobileContact';
import FooterContact from './components/FooterContact';
import styles from './FooterContactPage.module.scss';

const FooterContactPage = () => {
	return (
		<div>
			<div className={styles.footerDesktop}>
				<FooterContact />
			</div>
			<div className={styles.footerMobile}>
				<FooterMobileContact />
			</div>
		</div>
	);
};

export default FooterContactPage;
