import React from 'react';
import styles from './CardDesktop.module.scss';
import { motion } from 'framer-motion';

interface IProps {
	bgIMG: any;
	rightMessage: boolean;
	title: string;
	description: string;
	website: string;
	type: string;
}

const CardDesktop = (props: IProps) => {
	return (
		<div>
			{props.rightMessage === true ? (
				<div className={styles.container}>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, transition: { duration: 1 } }}
						style={{ display: 'flex', flexDirection: 'row' }}
					>
						<h3>{props.title}</h3>
						<hr
							style={{
								border: '1px solid #fff',
								width: '20rem',
								alignSelf: 'center',
								marginLeft: '1rem',
								opacity: '0.4'
							}}
						/>
					</motion.div>
					<div className={styles.innerContainer}>
						<div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1, transition: { duration: 1 } }}
								className={styles.outerCard}
								style={{ backgroundImage: `url(${props.bgIMG})` }}
							/>
						</div>
						<motion.div
							className={styles.textCard}
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
						>
							<div className={styles.innerTextCard}>
								{' '}
								<h6 style={{ alignSelf: 'flex-end', marginBottom: '-5px', color: 'orange' }}>
									Featured Project
								</h6>
								<h3 style={{ alignSelf: 'flex-end', lineHeight: '4rem', color: '#fff' }}>
									{props.title}
								</h3>
								<div className={styles.textBox}>
									<p
										style={{
											alignSelf: 'center',
											textAlign: 'center',
											marginTop: 'auto',
											marginBottom: 'auto'
										}}
									>
										{props.description}
									</p>
								</div>
								<h6 style={{ marginTop: '1rem', color: '#fff', marginLeft: '5.5rem' }}>{props.type}</h6>
								<a className={styles.link} href="https://hypeovernight.com">
									{props.website}
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			) : (
				<div className={styles.container}>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, transition: { duration: 1 } }}
						style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}
					>
						<hr
							style={{
								border: '1px solid #fff',
								width: '20rem',
								alignSelf: 'center',
								marginRight: '1rem',
								opacity: '0.4'
							}}
						/>
						<h3>{props.title}</h3>
					</motion.div>
					<div className={styles.innerContainer}>
						<motion.div
							className={styles.textCard2}
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
						>
							<div className={styles.innerTextCard}>
								{' '}
								<h6 style={{ alignSelf: 'flex-start', marginBottom: '-5px', color: 'orange' }}>
									Featured Project
								</h6>
								<h3 style={{ alignSelf: 'flex-start', lineHeight: '4rem', color: '#fff' }}>
									{props.title}
								</h3>
								<div className={styles.textBox}>
									<p
										style={{
											alignSelf: 'center',
											textAlign: 'center',
											marginTop: 'auto',
											marginBottom: 'auto'
										}}
									>
										{props.description}
									</p>
								</div>
								<h6
									style={{
										marginTop: '1rem',
										alignSelf: 'flex-end',
										color: '#fff',
										marginRight: '5.5rem'
									}}
								>
									{props.type}
								</h6>
								<a className={styles.link2} href="https://hypeovernight.com">
									{props.website}
								</a>
							</div>
						</motion.div>
						<div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1, transition: { duration: 1 } }}
								className={styles.outerCard}
								style={{ backgroundImage: `url(${props.bgIMG})` }}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CardDesktop;
