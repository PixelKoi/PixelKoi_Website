// import './Header.css';
import React, { useEffect, useRef, useState, useCallback } from "react";
import "../../../../styles/globalStyles.css";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import SpinningImage from "./components/3Dsquare/SpinningImage";
import { Link, useLocation } from "react-router-dom";
import headerImg from "../../../../assets/Home/box.jpg";
import BlurHashEncoder from "../../../../components/BlurHashEncoder/BlurHashEncoder";

const Header = (props: any) => {
  const list = { show: { opacity: 1, transition: { staggerChildren: 0.09 } } };
  const item = { show: { y: 0, opacity: 1, transition: { duration: 0.5 } } };
  return (
    <div className={styles.header} id="header">
      <div
        className={styles.headerBackgroundImg}
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        {/*<BlurHashEncoder images={headerImg}*/}

        {/* <ParticlesBackground /> */}
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
    </div>
  );
};

export default Header;
