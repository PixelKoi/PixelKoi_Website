import React, { useContext, useEffect, useState } from "react";
import styles from "./Offer.module.scss";
import { motion } from "framer-motion";
import { BsArrowRightCircle } from "react-icons/bs";
import uxdesign from "../../../../assets/Home/uxdesign.webp";
import code from "../../../../assets/Home/code.webp";
import web from "../../../../assets/Home/web.webp";
import { HashContext } from "../../../../components/BlurHashEncoder/BlurHashDecoder";
import { Blurhash } from "react-blurhash";
import { Link } from "react-router-dom";
import OurTech from "../OurTech/OurTech";
import headerImg from "../../../../assets/Home/box.jpg";

interface ImageType {
  [name: string]: {
    url: string;
    hash: string;
  };
}

const Offer = () => {
  const [loaded, setLoaded] = useState(false);

  const hashData = useContext<ImageType>(HashContext);
  console.log("Hash Data: ", hashData);
  const laptopHash = hashData["laptop"].hash;
  const tablet = hashData["tablet"].hash;
  const imac = hashData["imac"].hash;
  useEffect(() => {
    const img = new Image();
    img.src = headerImg;
    img.onload = () => {
      setLoaded(true);
    };
  }, [uxdesign, code, web]);

  return (
    <div id="services" className={styles.mainContainer}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.cta}
        >
          <h3>Software Services</h3>
          <h1>Custom Solutions to Suit You</h1>
          <hr className={styles.break} />
          <br />
          <br />
          <p className={styles.paragraph}>
            Unlock Your Business Potential: Our versatile team of Software
            Developers, UX Designers, and Project Managers collaborate
            seamlessly to transform your vision into reality and propel your
            business objectives forward.
          </p>

          <Link
            to={"/contact"}
            className={styles.link}
            title="Takes customer to the contact form allowing communication with Pixel Koi Company"
          >
            <BsArrowRightCircle
              style={{ color: "#e8985c", alignSelf: "center" }}
              size={30}
            />
            <p style={{ margin: "auto 0", color: "#fff" }}>Let's Talk</p>
          </Link>
        </motion.div>

        <div className={styles.softwareGroup}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className={styles.catDescription}
          >
            <h3 style={{ color: "#efff" }}>Software Engineering</h3>
            <hr className={styles.break} />
            <br />
            <br />
            <p>
              Our custom software development solutions meet your specific needs
              and goals, giving you a competitive advantage. Our comprehensive
              end-to-end software development services cover everything from
              planning, designing and developing to testing to launching,
              relieving you from the burden of managing intricate SDLCs.
            </p>
            <Link
              to={"/contact"}
              className={styles.link}
              title="Takes customer to the contact form allowing communication with Pixel Koi Company"
            >
              <BsArrowRightCircle
                style={{ color: "#e8985c", alignSelf: "center" }}
                size={30}
              />
              <p style={{ margin: "auto 0", color: "#fff" }}>Learn More</p>
            </Link>
          </motion.div>
          <div>
            <div style={{ display: loaded ? "none" : "inline" }}>
              <Blurhash
                hash={laptopHash}
                width="100%"
                height="100%"
                resolutionX={64}
                resolutionY={64}
                punch={1}
              />
            </div>
            <motion.img
              onLoad={() => setLoaded(true)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}
              src={code}
              alt="Macbook Pro image with code"
              className={styles.cardIMG}
            />
          </div>
        </div>

        <div className={styles.uxGroup}>
          <div>
            <div style={{ display: loaded ? "none" : "inline" }}>
              <Blurhash
                hash={tablet}
                width="100%"
                height="100%"
                resolutionX={64}
                resolutionY={64}
                punch={1}
                className={styles.headerBackgroundImg}
              />
            </div>
            <motion.img
              onLoad={() => setLoaded(true)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}
              src={uxdesign}
              alt="Ipad image with website wireframe"
              className={styles.cardIMG}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className={styles.catDescription}
          >
            <h3 style={{ color: "#efff" }}>UX Design</h3>
            <hr className={styles.break} />
            <br />
            <br />
            <p>
              If you seek a team that values transparent design processes and
              consistently delivers exceptional results within your budget? Turn
              to our long-standing design team specializing in responsive web
              and mobile solutions, and UX strategy and consulting.
            </p>
            <Link
              to={"/contact"}
              className={styles.link}
              title="Takes customer to the contact form allowing communication with Pixel Koi Company"
            >
              <BsArrowRightCircle
                style={{ color: "#e8985c", alignSelf: "center" }}
                size={30}
              />
              <p style={{ margin: "auto 0", color: "#fff" }}>Learn More</p>
            </Link>
          </motion.div>
        </div>

        <div className={styles.softwareGroup}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className={styles.catDescription}
          >
            <h3 style={{ color: "#efff" }}>Website Development</h3>
            <hr className={styles.break} />
            <br />
            <br />
            <p>
              Pixel Koi is dedicated to offering all-encompassing website
              development and ecommerce solutions to businesses of all sizes.
              Our professional team of developers, designers, and project
              managers collaborate closely to design custom solutions that cater
              to the unique needs of each client.
            </p>
            <Link
              to={"/contact"}
              className={styles.link}
              title="Takes customer to the contact form allowing communication with Pixel Koi Company"
            >
              <BsArrowRightCircle
                style={{ color: "#e8985c", alignSelf: "center" }}
                size={30}
              />
              <p style={{ margin: "auto 0", color: "#fff" }}>Learn More</p>
            </Link>
          </motion.div>
          <div>
            <div style={{ display: loaded ? "none" : "inline" }}>
              <Blurhash
                hash={imac}
                width="100%"
                height="100%"
                resolutionX={64}
                resolutionY={64}
                punch={1}
                className={styles.headerBackgroundImg}
              />
            </div>
            <motion.img
              onLoad={() => setLoaded(true)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true }}
              src={web}
              alt="Showing the development of a website with a macbook pro and imac in the background"
              className={styles.cardIMG}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
