import React from 'react';
import styles from './Card.module.scss';
import BlurHashImages from '../../../Landing Page/components/Offer/components/BlurHashImages';

const Card = (props: any) => {
	const jonny = 'LJLzBPPC.S%1~Vof%Ma}0LV?DjWC';
	const manny = 'LdH_utoL?bt7~qayt7WBM{a{M{of';
	const garo = 'L584DC%300E1iboKyFX80fR*}@xG';
	const chatgpt = 'LcRD1Wof~WayM{fkxuay%Mj@Rjay';

	const photoStyle = {
		position: 'relative',
		width: '100%',
		height: '100%',
		maxWidth: '200px',
		maxHeight: '200px',
		minWidth: '200px',
		minHeight: '200px',
		overflowX: 'hidden',
		overflowY: 'hidden',
		margin: 'auto'
	};
	return (
		<div className={styles.card}>
			<BlurHashImages src={props.image} style={photoStyle} hashCode={'LJLzBPPC.S%1~Vof%Ma}0LV?DjWC'} />
			<div className={styles.imageText}>
				<h6>
					<b>{props.name}</b>
				</h6>
				<p className={styles.imagep}>{props.description}</p>
			</div>
		</div>
	);
};

export default Card;
