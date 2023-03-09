import { FaWordpress, FaReact, FaShopify, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiAdobexd } from 'react-icons/si';
import { DiJava, DiJavascript1 } from 'react-icons/di';
import styles from './OurTech.module.scss';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const OurTech = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  let requestRef = useRef<number>(0);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) return;

    const cloneNode = marqueeElement.cloneNode(true) as HTMLDivElement;
    marqueeElement.parentNode?.appendChild(cloneNode);

    // Clone the content of the marquee and append it to the end
    const marqueeContent = marqueeElement.innerHTML;
    marqueeElement.innerHTML += marqueeContent;

    let currentX = 0;
    let speed = 0.3;

    const move = (timestamp: number) => {
      if (marqueeElement.offsetWidth === 0) return;

      currentX += speed;
      if (currentX >= marqueeElement.offsetWidth / 2) {
        currentX = 0;
      }
      marqueeElement.style.transform = `translateX(-${currentX}px)`;
      cloneNode.style.transform = `translateX(-${currentX}px)`;

      requestRef.current = requestAnimationFrame(move);
    };

    requestRef.current = requestAnimationFrame(move);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

	const marqueeVariants = {
		animate: {
			x: [ -240, -1035 ],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: 40,
					ease: 'linear'
				}
			}
		}
	};
	return (
		<main className={styles.container}>
			{/* <h2 className={styles.title}>Technologies</h2> */}

			<motion.div ref={marqueeRef} className={styles.iconContainer}>
				<DiJavascript1 />
				<SiTypescript />
				<SiPostgresql />
				<FaReact />
				<FaNodeJs />
				<DiJava />
				<FaFigma />
				<SiAdobexd />
				<FaWordpress />
				<DiJavascript1 />
				<SiTypescript />
				<SiPostgresql />
				<FaReact />
				<FaNodeJs />
				<DiJava />
				<FaFigma />
				<SiAdobexd />
				<FaWordpress />
			</motion.div>
			{/* <div className="marquee-container">
				<div className="marquee" ref={marqueeRef}>
					<img src="/logo1.png" alt="Logo 1" />
					<img src="/logo2.png" alt="Logo 2" />
					<img src="/logo3.png" alt="Logo 3" />
				</div>
			</div> */}
		</main>
	);
};

export default OurTech;

{
	/* <main className={styles.mainContainer}>
<div className={styles.innerContainer}>
	<div className={styles.innerContent}>
	

		<motion.div
			// initial="hidden"
			// variants={marqueeVariants}
			// animate="animate"
			className={styles.iconContainer}
		>
			<DiJavascript1 />
			<SiTypescript />
			<SiPostgresql />
			<FaReact />
			<FaNodeJs />
			<DiJava />
			<FaFigma />
			<SiAdobexd />
			<FaWordpress />
			<FaShopify />
		</motion.div>
	</div>
</div>
</main> */
}
