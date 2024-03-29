import React, { useState } from "react";
import styles from "./FooterDesktop.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const FooterDesktop = () => {
  let currentYear = new Date().getFullYear();
  return (
    <motion.div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.consultation}
        >
          <h4>GOT A PROJECT IN MIND?</h4>
          <motion.div className={styles.contactInfo}>
            CONTACT: info@pixelkoi.com
          </motion.div>
          <div className={styles.location}>
            <div className={styles.locationGroup}>
              <div>
                <i
                  style={{ color: "#FC2947" }}
                  className="fa-solid fa-location-dot fa-xl"
                />
              </div>
              <h4 className={styles.locationText}>Chiang Mai</h4>
            </div>
            <div className={styles.locationGroup}>
              <div>
                <i
                  style={{ color: "#FC2947" }}
                  className="fa-solid fa-location-dot fa-xl"
                />
              </div>
              <h4 className={styles.locationText}>Toronto</h4>
            </div>
          </div>
          <motion.div>
            <a
              target="_blank"
              href="mailto:jonathanbajada@pixelkoi.com?subject=Book%20a%20consultation"
            >
              Book a consultation
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.linksContainer}
        >
          <h4>INFORMATION</h4>
          <div className={styles.linksWrapper} id={styles.links}>
            <motion.div>
              <Link to="/" title="Description page for Pixel Koi Company">
                Home
              </Link>
            </motion.div>
            <motion.div>
              <Link to="/about" title="Description page for Pixel Koi Company">
                About
              </Link>
            </motion.div>
            <motion.div>
              <Link
                to="/#services"
                title="Shows services Pixel Koi Company Provides"
              >
                Services
              </Link>
            </motion.div>
            <motion.div>
              <Link
                to="/contact"
                title="Takes customer to the contact form allowing communication with Pixel Koi Company"
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.linksContainer}
        >
          <div className={styles.logo}>Pixel Kōi</div>

          <div className={`${styles.linksWrapper}`} id={styles.socials}>
            <motion.div>
              <a
                href="src/components/Footer/components/FooterDesktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size={25} />
              </a>
              <a
                href="src/components/Footer/components/FooterDesktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube size={30} />
              </a>
              <a
                href="src/components/Footer/components/FooterDesktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={25} />
              </a>
              <a
                href="https://twitter.com/pixelkoicompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterSquare size={25} />
              </a>
            </motion.div>
            <motion.div className="mt-4">
              <div>Newsletter sign-up</div>
              <input className={styles.input} placeholder="Enter email" />
              <button
                style={{
                  height: "41px",
                  borderStyle: "none",
                  borderRadius: "2px",
                  backgroundColor: "#214741",
                  fontWeight: "600",
                  textAlign: "center",
                  textDecoration: "none",
                  lineHeight: "20px",
                }}
              >
                Submit
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
        className={styles.copyrightContainer}
      >
        <motion.p className={styles.footerCopyright}>
          Copyright © {currentYear} Pixel Koi - All rights reserved.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default FooterDesktop;
