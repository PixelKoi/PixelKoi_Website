import React from 'react';
import styles from './ClientCard2.module.scss';

interface IProps {
	img: any;
	style: any;
}

const ClientCard = (props: IProps) => {
	return (
		<div className={styles.container}>
			<img alt="clientImages" src={props.img} style={props.style} />
		</div>
	);
};

export default ClientCard;
