import React, { useState } from "react";
import ClientCard from "./ClientCard2";
import styles from "./ClientCardLayout.module.scss";
import { motion } from "framer-motion";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import hype from "../../../../../assets/Clients/hype.webp";
import goodcompany from "../../../../../assets/Clients/goodcompany.webp";
import developpa from "../../../../../assets/Clients/developpa.webp";

const ClientCardLayout = () => {
  const [count, setCount] = useState(0);

  const handleIMG = () => {
    switch (count) {
      case 0:
        return (
          <a href="https://hypeovernight.com" target="_blank">
            <img
              loading="lazy"
              src={hype}
              className={styles.logoIMG}
              alt="logoImg"
            />
          </a>
        );
      case 1:
        return (
          <img
            loading="lazy"
            src={goodcompany}
            className={styles.logoIMG}
            id={styles.gc}
            alt="goodcompanyImage"
          />
        );
      case 2:
        return (
          <a href="https://developpa.io/" target="_blank">
            <img
              loading="lazy"
              src={developpa}
              className={styles.logoIMG}
              id={styles.developpa}
              alt="developpaImage"
            />
          </a>
        );
      default:
        return (
          <img src={hype} className={styles.logoIMG} alt="HypeCompanyImage" />
        );
    }
  };

  return (
    <div id="work" className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.textContainer}
        >
          <motion.h1 className={styles.clientTitle} style={{ color: "#efff" }}>
            <b>Our Clients</b>
          </motion.h1>
          <hr className={styles.break} />
          <br />
          <br />
          <motion.p className={styles.cta}>
            Our clients reside in various nations and use diverse languages, yet
            our shared aim unites us in our efforts..
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.cardContainer}
        >
          <a href="https://hypeovernight.com" target="_blank">
            <motion.div className={styles.gridItem}>
              <ClientCard img={hype} style={{ maxWidth: "200px" }} />
            </motion.div>
          </a>
          <a href="https://hypeovernight.com" target="_blank">
            <motion.div className={styles.gridItem}>
              <ClientCard img={goodcompany} style={{ maxWidth: "100px" }} />
            </motion.div>
          </a>
          <a href="https://developpa.io" target="_blank">
            <motion.div className={styles.gridItem}>
              <ClientCard img={developpa} style={{ maxWidth: "200px" }} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientCardLayout;
