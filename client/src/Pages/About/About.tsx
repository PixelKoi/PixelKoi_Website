import styles from './About.module.scss';
import paper from '../../assets/images/paper1.png';
import paper2 from '../../assets/images/paper2.png';
import team from '../../assets/images/team.jpg';
import hipsters from '../../assets/images/hipsters.jpg';
import Nav from '../../components/Nav/Nav2';
import garo from '../../assets/images/about_page/garo.jpeg';
import jonny from '../../assets/images/about_page/jonny3.png';
import Team from './Team/Team';
import Footer2 from '../../components/Footer/Footer2';
import about from '../../assets/About/creative.jpg';
import dream from '../../assets/About/dream.jpg';
import story from '../../assets/About/story.jpg';
const About = () => {
	return (
		<div className={styles.wrapper}>
			<Nav />

			{/* <div className={styles.contentContainer}>
					<div className={`${styles.about} ${styles.sections}`}>
						<div className={styles.slogan}>
							<h1>
								<span className={styles.italic}>About</span> <br />
								our agency
							</h1>
							<p>
								Pixel Koi is a creative software development agency dedicated to crafting meaningful
								experiences through Website and Mobile applications
							</p>
						</div>
						<div className={styles.slogan}>
							<img loading="lazy" src={paper} alt="" className={styles.imgContainer} />
							<img loading="lazy" src={paper} alt="" className={styles.imgContainer} />
						</div>
						<p>
							We are a highly <span className={styles.bold}>curious, creative</span> and{' '}
							<span className={styles.bold}>meticulous</span> team who work closely with our clients
							during each stage of the project to understand their unique needs and solve them in
							innovative ways - delivering a well-designed product.
						</p>
					</div>

					<div className={`${styles.subsection} ${styles.sections}`}>
						<h2>Our Story</h2>
						<div className={styles.slogan}>
							<img loading="lazy" src={hipsters} alt="" className={styles.imgContainer} />
							<p>
								After a chance meeting in Vancouver, B.C. while working remote software jobs, we began
								working on side projects for fun. It was soon obvious that we worked great as a team and
								decided we wanted to combine our skills and began the journey into entrepreneurship.
							</p>
						</div>
					</div>
				</div> */}
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
						<img loading="lazy" src={dream} alt="" className={styles.imgContainer} />
						<img loading="lazy" src={about} alt="" className={styles.imgContainer} />
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
						<img loading="lazy" src={story} alt="" className={styles.imgContainer} />
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
		</div>
	);
};

export default About;

{
	/* <div className={`${styles.subsection} ${styles.sections}`}>
	<h2>Meet the team</h2>
	<div className={styles.teamContent}>
		<EmployeeCard name="Jonathan Bajada" title="Co-Founder" img={jonny} />
		<EmployeeCard name="Kirsten Kai" title="Co-Founder" img={kc} />
	</div>
</div>; */
}
