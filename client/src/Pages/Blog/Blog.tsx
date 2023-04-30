import React from 'react';
import styles from './Blog.module.scss';
import Nav from '../../components/Nav/Nav';
import Card from './component/Card';
import HeaderCard from './component/HeaderCard';
import img from '../../assets/Home/web.jpg';

const tags = [ 'UX Design', 'AI', 'Art' ];
const Blog = () => {
	return (
		<div className={styles.wrapper}>
			<Nav />
			<HeaderCard />
			<div className={styles.cardWrapper}>
				<div className={styles.cardContainer}>
					<div className={styles.gridItem}>
						<Card
							title={'AI will kill all'}
							date={'May 16th, 1991'}
							description={
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
							}
							tags={tags}
						/>
					</div>
					<div className={styles.gridItem}>
						<Card
							title={'AI will kill all'}
							date={'May 16th, 1991'}
							description={
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
							}
							tags={tags}
						/>
					</div>
					<div className={styles.gridItem}>
						<Card
							title={'AI will kill all'}
							date={'May 16th, 1991'}
							description={
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
							}
							tags={tags}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
