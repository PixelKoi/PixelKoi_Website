import { useEffect, useRef, useState } from 'react';
import '../../../../styles/globalStyles.css';
import styles from './ServiceStyles.module.scss';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

const Services = (props: any) => {
	const [ text, setText ] = useState();
	const y = useMotionValue(0);
	const opacity = useTransform(y, [ 0, 300 ], [ 1, 0 ]);

	// const [ isVisible, setIsVisible ] = useState(false);
	// const boxRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
	// useEffect(() => {
	// 	const observer = new IntersectionObserver(([ entry ]) => {
	// 		setIsVisible(entry.isIntersecting);
	// 	});

	// 	observer.observe(boxRef.current);

	// 	return () => {
	// 		observer.disconnect();
	// 	};
	// }, []);

	return (
		<div id="services" className={styles.container}>
			<motion.div className={styles.missonSection} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
				<div className="row">
					<div className="col-12 col-lg-6 ">
						<motion.h3
							className={styles.missionTitle}
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
						>
							<b>OUR MISSION</b>
						</motion.h3>
						<motion.h1
							className={styles.missionCTA}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
						>
							Combining design and technology
						</motion.h1>
						<motion.h1
							className={styles.missionCTA}
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
						>
							to evoke emotions.
						</motion.h1>
					</div>
					<motion.div className="col-12 col-lg-6">
						<motion.p
							className={styles.paragraphMission}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, transition: { duration: 1 } }}
						>
							...transform visions into beloved
						</motion.p>
						<motion.p
							className={styles.paragraphMission}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1, transition: { duration: 1 } }}
						>
							digital experiences.
						</motion.p>
					</motion.div>
				</div>
			</motion.div>
			<motion.div className={styles.titleMainContainer}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					className={styles.pageNumber}
				>
					02
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					className={styles.titleContainer}
				>
					<div className={styles.title}>Our Services</div>
					<hr className={styles.lineBreak} />
				</motion.div>
			</motion.div>
			<div className={styles.servicesSection}>
				<div className="container-fluid persuade">
					<motion.div className="row " initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
						<div className="col-12 col-lg-6">
							<motion.div
								className={`${styles.cardBorder} ${styles.cardBorderFourth}`}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
							>
								<div className={`${styles.serviceCard} ${styles.serviceCardFourth}`}>
									<h3>
										<b>SOFTWARE ENGINEERING</b>
									</h3>
									<p className={styles.cta}>
										Many digital transformation initiatives fall short of expectations, with less
										than ideal outcomes and ultimately fail. The process of becoming digital can be
										fraught with risks and difficulties, making it more challenging and unpleasant
										than necessary.
									</p>
									<ul className={styles.serviceListItem}>
										<li>Full-Stack Development</li>
										<li>Cloud Development</li>
										<li>Continuous Delivery</li>
										<li>Technical Consulting</li>
										<li>Quality Assurance</li>
										<li>Reliable Technologies</li>
									</ul>
								</div>
							</motion.div>
						</div>
						<div className="col-12 col-lg-6">
							<motion.div
								className={`${styles.cardBorder} ${styles.cardBorderThird}`}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
							>
								<div className={`${styles.serviceCard} ${styles.serviceCardThird}`}>
									<h3>
										<b>UX DESIGN</b>
									</h3>
									<p className={styles.cta}>
										Having thoroughly analyzed consumers' preferences, tastes, and behaviors, we
										concentrate on user experience design to captivate people and foster
										connections.
									</p>
									<ul className={styles.serviceListItem}>
										<li>Architecture Prototyping</li>
										<li>Usability Testing</li>
										<li>Customer Research</li>
										<li>Rapid Prototyping UX</li>
									</ul>
								</div>
							</motion.div>
						</div>
					</motion.div>
					<div className="row">
						<div className="col-12 col-lg-6">
							<motion.div
								className={`${styles.cardBorder} ${styles.cardBorderFirst}`}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
							>
								<div className={`${styles.serviceCard} ${styles.serviceCardFirst}`}>
									<div>
										<h3>
											<b>WEBSITE DESIGN</b>
										</h3>
										<p className={styles.cta}>
											Establishing a distinctive and memorable brand identity is a crucial step in
											making companies appealing to consumers, through the use of clear and
											emotionally evocative language.
										</p>
										<ul className={styles.serviceListItem}>
											<li>E-commerce</li>
											<li>Shopify</li>
											<li>Webflow</li>
											<li>Wordpress</li>
											<li>Framer</li>
										</ul>
									</div>
								</div>
							</motion.div>
						</div>
						<div className="col-12 col-lg-6 ">
							<motion.div
								className={`${styles.cardBorder} ${styles.cardBorderSecond}`}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
							>
								<div className={`${styles.serviceCard} ${styles.serviceCardSecond}`}>
									<h3>
										<b>CONTENT</b>
									</h3>
									<p className={styles.cta}>
										A successful strategy requires compelling narratives. We craft highly
										captivating content to establish a strong brand story, which drives awareness
										and enhances recognition.
									</p>
									<ul className={styles.serviceListItem}>
										<li>Art Direction</li>
										<li>Content Strategy</li>
										<li>Copywriting</li>
										<li>Motion & Visual Design</li>
									</ul>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
