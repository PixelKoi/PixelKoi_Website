import React, { useRef, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import styles from './Work.module.scss';
import Card from './components/Card';
import CardDesktop from './components/CardDesktop';

import hype from '../../assets/shopifypkoi.png';

import { motion, useMotionValue, useTransform } from 'framer-motion';

function Services() {
	const [ active, setActive ] = useState(false);
	const [ typewriterText, setTypewriterText ] = useState<string>('');
	const y = useMotionValue(0);
	const opacity = useTransform(y, [ 0, 300 ], [ 1, 0 ]);

	return (
		<div id="work" className={styles.fluidContainer}>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 1 } }}
				className={styles.titleMainContainer}
			>
				<motion.div className={styles.pageNumber}>01</motion.div>
				<motion.div className={styles.titleContainer}>
					<div className={styles.title}>Our Work</div>
					<hr className={styles.lineBreak} />
				</motion.div>
			</motion.div>
			{/* <motion.h3 className={styles.headerContainer} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
				<Typewriter
					options={{
						strings: [ 'Shopify Development.' ],
						autoStart: true,
						cursor: '_'
					}}
					onInit={(typewriter) => {
						typewriter.typeString('Hype Over Night.').start();
					}}
				/>
			</motion.h3> */}
			{/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10rem' }}>
				<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
					<h2 style={{ alignSelf: 'center', color: '#fff', lineHeight: '4rem' }}>Coming Soon...</h2>
					<h1
						style={{
							alignSelf: 'center',
							color: '#fff',
							borderBottom: '2px solid #fff',
							paddingBottom: '0.5rem'
						}}
					>
						The Good Company
					</h1>
				</div>
			</div>
			<div style={{ padding: '0 3rem', marginTop: '8rem', display: 'flex', flexDirection: 'row' }}>
				<img height={600} src={goodCompany} />
				<div>
					<h4 style={{ color: 'Orange', marginLeft: '2rem' }}>The Good Company</h4>
					<p style={{ color: '#fff', marginLeft: '2rem', width: '800px' }}>
						Located in the heart of Toronto's trendy Queen St West, The Good Company is set to become the
						ultimate destination for those seeking a unique experience. Our team is excited to capture the
						essence of this vibrant neighborhood in the design of the website, showcasing the perfect
						combination of coffee, cocktails, and grooming services offered at The Good Company.
					</p>
				</div>
			</div> */}
			<div className={styles.desktopCardContainer}>
				<div className={styles.desktopCardItem1}>
					<CardDesktop
						bgIMG={hype}
						rightMessage={true}
						title={'Hype Over Night'}
						description={
							'Bringing the hype to life for our client Hype Over Night! It was a pleasuredesigning a store that showcases the coolest streetwear and rarest sneakers for fashion-forward individuals.'
						}
						type={'Shopify Development'}
						website={'https://hypeovernight.com'}
					/>
				</div>
				<div className={styles.desktopCardItem2}>
					<CardDesktop
						bgIMG={hype}
						rightMessage={false}
						title={'Goblin Digital'}
						description={
							'Bringing the hype to life for our client Hype Over Night! It was a pleasuredesigning a store that showcases the coolest streetwear and rarest sneakers for fashion-forward individuals.'
						}
						type={'React Development'}
						website={'https://hypeovernight.com'}
					/>
				</div>
			</div>
			<div className={styles.container}>
				<motion.div className={styles.gridItem} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
					<Card
						bgColor={'#D3F054'}
						title={'HYPE OVER NIGHT'}
						description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						bgIMG={hype}
						webLink={'https://hypeovernight.com'}
					/>
				</motion.div>
				<motion.div className={styles.gridItem} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
					<Card
						bgColor={'#D3F054'}
						title={'GOOD COMPANY'}
						description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
						bgIMG={hype}
						webLink={'https://hypeovernight.com'}
					/>
				</motion.div>
			</div>
		</div>
	);
}

export default Services;
