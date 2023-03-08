import React from 'react';
import styles from './ClientCard.module.scss';

interface IProps {
	title: string;
}

const ClientCard = (props: IProps) => {
	return (
		<div className={styles.container}>
			{/* <img /> */}
			<h1>{props.title}</h1>
		</div>
	);
};

export default ClientCard;
