import styles from './About.module.scss';
import paper from '../../assets/images/paper1.png';
import paper2 from '../../assets/images/paper2.png';
import team from '../../assets/images/team.jpg';
import hipsters from '../../assets/images/hipsters.jpg';
import Nav from '../../components/Nav/Nav2';
import garo from '../../assets/images/about_page/garo.jpeg';
import jonny from '../../assets/images/about_page/jonny3.png';
import Team from './Team/Team';
import Footer from '../../components/Footer/Footer';

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
							As a team of experienced professional software engineers, we bring our passion for
							problem-solving and ingenuity to each project we decide to undertake.
							With a keen attention to detail, and insatiable curiosity, we work closely with our select
							clients throughout the entire development process to gain a deep understanding of their
							unique needs.
							Our goal is to deliver a well-designed user experience, brands that not only meets but
							exceeds users and clients expectations. We take great pride in our ability to tackle
							complex challenges and provide customized solutions that drive our clients' success.
						</p>
					</div>
					<div className={styles.imgContainer}>
						<img loading="lazy" src={paper} alt="" className={styles.imgContainer} />
						<img loading="lazy" src={paper2} alt="" className={styles.imgContainer} />
					</div>
					<div className={styles.description}>
						<p>
							We are a highly{' '}
							<span className={styles.hightlight}>
								<b>curious</b>
							</span>,{' '}
							<span className={styles.hightlight}>
								<b>creative</b>
							</span>{' '}
							and <span className={styles.hightlight}>meticulous</span> team who work closely with our
							clients during each stage of the project to understand their unique needs and solve them in
							innovative ways - delivering a well-designed product.
						</p>
					</div>
				</div>

				<div className={styles.section} id={styles.ourStory}>
					<div className={styles.headerText}>
						<h3 style={{ color: 'orange' }}>Our Story</h3>
					</div>
					<div className={styles.imgContainer}>
						<img loading="lazy" src={hipsters} alt="" className={styles.imgContainer} />
						<p>

						</p>
					</div>
				</div>
			</div>

			<Team />
			<Footer />
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
