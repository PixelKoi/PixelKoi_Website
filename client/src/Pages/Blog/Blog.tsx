import React from 'react';
import styles from './Blog.module.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Main/Footer';
import Card from './component/Card';
import HeaderCard from './component/HeaderCard';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const tags = [ 'UX Design', 'AI', 'Art' ];
const Blog = () => {
	return (
		<div className={styles.mainWrapper}>
			<Nav />
			<div className={styles.wrapper}>
				<h1>Musings from our collective</h1>
				<br />
				<h6>The latest industry news, interviews, technologies, and resources</h6>
				<HeaderCard
					title={'AI will kill all'}
					date={'May 16th, 1991'}
					description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'}
					tags={tags}
				/>
				<div className={styles.cardWrapper}>
					<div className={styles.cardContainer}>
						<div className={styles.gridItem}>
							<Card
								title={'AI will kill all'}
								date={'May 16th, 1991'}
								description={
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
								}
								tags={tags}
							/>
						</div>
						<div className={styles.gridItem}>
							<Card
								title={'AI will kill all'}
								date={'May 16th, 1991'}
								description={
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
								}
								tags={tags}
							/>
						</div>
						<div className={styles.gridItem}>
							<Card
								title={'AI will kill all'}
								date={'May 16th, 1991'}
								description={
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
								}
								tags={tags}
							/>
						</div>
					</div>
				</div>
				<div className={styles.pageContainer}>
					<div className={styles.leftArrow}>
						<FaLongArrowAltLeft size={40} />
						Previous
					</div>
					<div className={styles.rightArrow}>
						Next
						<FaLongArrowAltRight size={40} />
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Blog;
