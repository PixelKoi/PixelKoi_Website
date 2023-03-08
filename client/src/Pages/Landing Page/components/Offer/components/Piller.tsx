import React from 'react';
import styles from './Piller.module.scss';
import { FaWordpress, FaReact, FaShopify, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiAdobexd } from 'react-icons/si';
import { motion } from 'framer-motion';

interface IProps {
	title: string;
	description: string;
	option: number;
}
const Piller = (props: IProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
			viewport={{ once: true }}
			className={styles.container}
		>
			<div className={styles.circle}>
				<div className={styles.icon}>
					{props.option === 1 ? (
						<FaReact size="2rem" />
					) : props.option === 2 ? (
						<FaFigma size="2rem" />
					) : props.option === 3 ? (
						<FaNodeJs size="2rem" />
					) : props.option === 4 ? (
						<FaShopify size="2rem" />
					) : null}
				</div>
			</div>
			<h1>{props.title}</h1>
			<p>{props.description}</p>
		</motion.div>
	);
};

export default Piller;
