import React from 'react';
import '../../../../styles/globalStyles.css';
import styles from './Clients.module.scss';
import ClientLayout from './components/ClientCardLayout';
import ClientMobile from './components/ClientMobile';

const Clients = (props: any) => {
	return (
		<div>
			<div className={styles.desktop}>
				<ClientLayout />
			</div>
			<div className={styles.mobile}>
				<ClientMobile />
			</div>
		</div>
	);
};
export default Clients;
