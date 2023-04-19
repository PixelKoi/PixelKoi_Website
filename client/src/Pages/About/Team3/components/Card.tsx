import React from 'react';
import styles from './Card.module.scss';
import jonny from '../../../../assets/images/slider/jonny.webp';
import BlurHashImages from '../../../Landing Page/components/Offer/components/BlurHashImages';

const Card = (props: any) => {
	const jonny = 'LJLzBPPC.S%1~Vof%Ma}0LV?DjWC';

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
