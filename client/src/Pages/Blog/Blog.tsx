import React from 'react';
import styles from './Blog.module.scss';
import Nav from '../../components/Nav/Nav';
import Card from './component/Card';
import HeaderCard from './component/HeaderCard';
import img from '../../assets/Home/web.jpg';

const Blog = () => {
	return (
		<div className={styles.wrapper}>
			<Nav />
			<HeaderCard />
			<div className={styles.cardWrapper}>
				<div className={styles.cardContainer}>
					<div className={styles.gridItem}>
						<Card />
					</div>
					<div className={styles.gridItem}>
						<Card />
					</div>
					<div className={styles.gridItem}>
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
