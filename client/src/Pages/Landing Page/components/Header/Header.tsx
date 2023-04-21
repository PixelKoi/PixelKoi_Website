// import './Header.css';
import React, { useEffect, useState, useContext } from "react";
import "../../../../styles/globalStyles.css";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import headerImg from "../../../../assets/Home/box.jpeg";
import { Blurhash } from "react-blurhash";
import { HashContext } from "../../../../components/BlurHashEncoder/BlurHashDecoder";

interface ImageType {
  [name: string]: {
    url: string;
    hash: string;
  };
}
const Header = () => {
  const list = { show: { opacity: 1, transition: { staggerChildren: 0.09 } } };
  const item = { show: { y: 0, opacity: 1, transition: { duration: 0.5 } } };
  const [loaded, setLoaded] = useState(false);
  const hashData = useContext<ImageType>(HashContext);
  const headerHash = hashData["headerImg"].hash;

  useEffect(() => {
    const img = new Image();
    img.src = headerImg;
    img.onload = () => {
      setLoaded(true);
    };
  }, []);

  return (
    <div className={styles.header} id="header">
      <div>
        <div style={{ display: loaded ? "none" : "inline" }}>
          <Blurhash
            hash={headerHash}
            width="100%"
            height="100%"
            resolutionX={64}
            resolutionY={64}
            punch={1}
            className={styles.headerBackgroundImg}
          />
        </div>
        <img
          onLoad={() => setLoaded(true)}
          src={headerImg}
          alt="Header Image"
          className={styles.headerBackgroundImg}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.modalContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            animate="show"
            variants={list}
            className={styles.textContainer}
          >
            <div className={styles.headerText}>
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                variants={item}
                className={styles.text}
              >
                We Create
              </motion.h1>
            </div>
            <div className={styles.headerText}>
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                variants={item}
                className={styles.text}
              >
                Software Solutions
              </motion.h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.9 } }}
            className={styles.buttonGroup}
          >
            <Link
              to={"/contact"}
              title="Takes customer to the contact form allowing communication with Pixel Koi Company"
            >
              <button className={styles.button} id={styles.buttonContact}>
                Contact
              </button>
            </Link>
            <Link to={"#services"}>
              <button className={styles.button}>Learn More</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
