import styles from './About.module.scss';
import Nav from '../../components/Nav/Nav';
import Team from './Team/Team';
import Footer2 from '../../components/Footer/Footer2';

import creative from './../../assets/About/creative.webp';
import dream from '../../assets/About/dream.webp';
import story from '../../assets/About/story.webp';
import { motion } from 'framer-motion';
const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1, transition: { duration: 1 } }}
			viewport={{ once: true }}
			className={styles.wrapper}
		>
			<Nav />

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
						<img loading="lazy" src={dream} alt="inspirationalQuote" className={styles.imgContainer} id={styles.dream} />
						<img loading="lazy" src={creative} alt="inspirationalQuote" className={styles.imgContainer} id={styles.creative} />
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
						<h3 style={{ color: 'orange' }}>Our Story</h3>
					</div>
					<div className={styles.imgContainer}>
						<motion.img loading="lazy" src={story} alt="" className={styles.imgContainer} />
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

			<Team />
			<Footer2 />
		</motion.div>
	);
};

export default About;
