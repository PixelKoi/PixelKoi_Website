import { useEffect, useRef, useState } from "react";
import "../../../styles/globalStyles.css";
import styles from "./Team2Styles.module.scss";
import { motion, useMotionValue, useTransform } from "framer-motion";
import carousel_images from "../../../images";

interface ImageType {
  src: string;
}

const images: ImageType[] = [
  { src: "https://image1.jpg" },
  { src: "https://image2.jpg" },
  { src: "https://image3.jpg" },
  { src: "https://image4.jpg" },
];

const Team = (props: any) => {
  const [width, setWidth] = useState(0);
  const carousel: any = useRef(10);
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 300], [1, 0]);
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  });
  return (
    <div id="team" className={styles.container}>
      <div className={styles.teamContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.teamText}
        >
          <motion.h3 className={styles.teamTitle}>
            <b>Our Team</b>
          </motion.h3>
          <motion.p className={styles.cta}>
            At our core, we are a team of designers, developers, strategists,
            and problem-solvers who share a collective passion for leveraging
            the power of technologies, creativity and imagination in turn
            creating enthralling digital experiences that make a positive
            difference in people's lives. Whether we're brainstorming ideas or
            putting them into action, we work together towards a common goal of
            crafting impactful solutions that resonate with our clients and
            their users.
          </motion.p>
        </motion.div>

        <motion.div
          ref={carousel}
          className={styles.carousel}
          whileTap={{ cursor: "grabbing" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={styles.innerCarousel}
          >
            {carousel_images.map((image) => {
              return (
                <motion.div className={styles.item}>
                  <img
                    className={styles.imageScale}
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className={styles.imageText}>
                    <h6>
                      <b>{image.name}</b>
                    </h6>
                    <p className={styles.imagep}>{image.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
