import styles from './About.module.scss';
import NavGroup from '../../components/Nav/NavGroup';
import Team2 from './Team3/Team';
import Footer from '../../components/Footer/Main/Footer';
import creative from '../../assets/About/creative.png';
import dream from '../../assets/About/dream.webp';
import story from '../../assets/About/story.webp';
import { HashContext } from '../../components/BlurHashEncoder/BlurHashDecoder';
import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import BlurHashImages from './components/BlurHashImages';
import BlurHashImages2 from './components/BlurHashImages2';
import { Helmet } from 'react-helmet';

interface ImageType {
	[name: string]: {
		url: string;
		hash: string;
	};
}

const About = () => {
	const imageStyles = {
		position: 'relative',
		width: '100%',
		height: '100%',
		maxWidth: '580px',
		maxHeight: '380px',
		minHeight: '240px',
		overflowX: 'hidden',
		overflowY: 'hidden',
		margin: 'auto'
	};

	const [ shouldRenderDream, setShouldRenderDream ] = useState(false);

	const hashData = useContext<ImageType>(HashContext);
	console.log('About Page Hash Data: ', hashData);
	const creativeHash = hashData['creative'].hash;
	const dreamHash = hashData['dream'].hash;
	const storyHash = hashData['story'].hash;

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setShouldRenderDream(true);
			} else {
				setShouldRenderDream(false);
			}
		};

		handleResize(); // initial call to handleResize

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1, transition: { duration: 1 } }}
			viewport={{ once: true }}
			className={styles.wrapper}
		>
      <Helmet>
     		<title>About Page</title>
        	<meta name="description" content="Unlock Your Business Potential: Our versatile team of Software Developers, UX Designers, and
						Project Managers collaborate seamlessly to transform your vision into reality and propel your
						business objectives forward." />
        	<meta property="og:title" content="About Page" />
        	<meta property="og:description" content="Unlock Your Business Potential: Our versatile team of Software Developers, UX Designers, and
						Project Managers collaborate seamlessly to transform your vision into reality and propel your
						business objectives forward." />
		  </Helmet>
			<NavGroup />
			<div className={styles.container}>
				<div className={styles.section}>
					<div className={styles.headerText}>
						<h1>
							<i>Our Agency</i>
						</h1>
						<p style={{ fontSize: '20px' }}>
							Pixel Koi is an innovative software development agency dedicated to crafting impactful
							experiences through Website and Mobile applications
						</p>
					</div>
					<div className={styles.imgContainer}>
						{shouldRenderDream && <BlurHashImages2 src={dream} hashCode={dreamHash} />}
						<BlurHashImages src={creative} hashCode={creativeHash} />
					</div>
					<div className={styles.description}>
						<p>
							We are a{' '}
							<span className={styles.hightlight}>
								<b>curious</b>
							</span>{' '}
							and
							<span className={styles.hightlight}>
								<b> creative</b>
							</span>{' '}
							team of skilled professionals, each with our own unique niches of expertise, coming together
							to deliver exceptional results through shared passion, curiosity and
							<span className={styles.hightlight}> meticulous</span> planning, we work closely with our
							clients during each stage of the project to comprehend their distinctive requirements and
							provide excellent user experiences for their users. Through our expertise and inventive
							solutions, we carve a path that leads to a product that exceeds expectations. Our proven
							track record and unwavering commitment to improving our designs and ingenuity is a testament
							to our dedication to deliver excellence in every project we choose to undertake. When you
							work with us, you can be confident that you are partnering with a team of true professionals
							who will help you achieve your goals and take your brand to the next level.
						</p>
					</div>
				</div>

				<div className={styles.section} id={styles.ourStory}>
					<div className={styles.headerText}>
						<h3 style={{ color: '#e8985c' }}>Our Story</h3>
					</div>

					<div className={styles.imgContainer2}>
						<BlurHashImages2 src={story} hashCode={storyHash} />
						<p>
							As a team of experienced professional software engineers, we bring our passion for
							problem-solving and ingenuity to each project we decide to undertake. With a keen attention
							to detail, and insatiable curiosity, we work closely with our select clients throughout the
							entire development process to gain a deep understanding of their unique needs. Our goal is
							to deliver a seamless user experience, creating unique and memorable brands for our clients
							that not only meets but exceeds users and clients expectations. We take great pride in our
							ability to tackle complex challenges and provide customized solutions that drive our
							clients' success.
						</p>
					</div>
				</div>
			</div>
			<Team2 />
			<Footer />
		</motion.div>
	);
};

export default About;
