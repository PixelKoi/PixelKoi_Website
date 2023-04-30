import React from 'react';
import styles from './Blog.module.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Main/Footer';
import Card from './component/Card';
import HeaderCard from './component/HeaderCard';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

//Todo
/* 
   Onclick update global variables to be shown on blog page using redux
   Query blog table to get, img, author + date, description, tag, place latest 3 on buttom, top always shows latest entry
*/

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
						<Link to="/bpage" className={styles.gridItem}>
							<Card
								title={'AI will kill all'}
								date={'May 16th, 1991'}
								description={
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
								}
								tags={tags}
							/>
						</Link>
						<Link to="/bpage" className={styles.gridItem}>
							<Card
								title={'AI will kill all'}
								date={'May 16th, 1991'}
								description={
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
								}
								tags={tags}
							/>
						</Link>
						<Link to="/bpage" className={styles.gridItem}>
							<Card
								title={'AI will kill all'}
								date={'May 16th, 1991'}
								description={
									'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
								}
								tags={tags}
							/>
						</Link>
					</div>
				</div>
				<div className={styles.pageContainer}>
					<div className={styles.leftArrow}>
						<div className={styles.icon}>
							<FaLongArrowAltLeft size={35} />
						</div>
						<p>Previous</p>
					</div>
					<div className={styles.rightArrow}>
						<p>Next</p>
						<div className={styles.icon}>
							<FaLongArrowAltRight size={35} />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Blog;
