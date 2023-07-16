import React, { useContext } from "react";
import styles from "./Offer.module.scss";
import { motion } from "framer-motion";
import { BsArrowRightCircle } from "react-icons/bs";
import codeDesign from "../../../../assets/Home/codeDesign.webp";
import uxDesign from "../../../../assets/Home/uxDesign.webp";
import webDesign from "../../../../assets/Home/webDesign.webp";
import { HashContext } from "../../../../components/BlurHashEncoder/BlurHashDecoder";
import { Link } from "react-router-dom";
import BlurHashImages from "./components/BlurHashImages";
import { Helmet } from "react-helmet";

interface ImageType {
  [name: string]: {
    url: string;
    hash: string;
  };
}

const Offer = () => {
  const hashData = useContext<ImageType>(HashContext);
  console.log("Hash Data: ", hashData);
  const softwareHash = hashData["laptop"].hash;
  const uxHash = hashData["tablet"].hash;
  const webHash = hashData["imac"].hash;

  return (
    <div id="services" className={styles.mainContainer}>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Unlock Your Business Potential: Our dedicated team of Software Developers and skilled
          UX Designer collaborates seamlessly to transform your vision into reality. Committed to propelling your
          business objectives forward,
           we offer personalized and transparent services that assure success in a lean and efficient manner."
        />
        <meta property="og:title" content="Home Page" />
        <meta
          property="og:description"
          content="Unlock Your Business Potential: Our dedicated team of Software Developers and skilled
          UX Designer collaborates seamlessly to transform your vision into reality. Committed to propelling your
          business objectives forward,
           we offer personalized and transparent services that assure success in a lean and efficient manner."
        />
      </Helmet>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.cta}
        >
          <h3>Software Services</h3>
          <h3 style={{ color: "#efff" }}>Custom Solutions to Suit You</h3>
          <hr className={styles.break} />
          <br />
          <br />
          <p className={styles.paragraph}>
            Unlock Your Business Potential: Our dedicated team of Software
            Developers and skilled UX Designer collaborates seamlessly to
            transform your vision into reality. Committed to propelling your
            business objectives forward, we offer personalized and transparent
            services that assure success in a lean and efficient manner.
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.softwareGroup}
        >
          <div className={styles.catDescription}>
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
          </div>
          <div className={styles.cardIMG}>
            <BlurHashImages
              src={codeDesign}
              style={{ marginLeft: "auto" }}
              hashCode={softwareHash}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.uxGroup}
        >
          <div className={styles.cardIMG}>
            <BlurHashImages
              src={uxDesign}
              hashCode={uxHash}
              style={{ marginRight: "auto" }}
            />
          </div>
          <div className={styles.catDescription}>
            <h3 style={{ color: "#efff" }}>Web Design</h3>
            <hr className={styles.break} />
            <br />
            <br />
            <p>
              If you're seeking a team that values transparency in design
              processes and consistently delivers exceptional results, turn to
              us. Our in-house designer specializes in responsive web and mobile
              solutions, as well as UX strategy and consulting. With expert use
              of Figma and Webflow, we're equipped to transform your vision into
              a compelling digital experience.
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className={styles.softwareGroup}
        >
          <div className={styles.catDescription}>
            <h3 style={{ color: "#efff" }}>Custom Website Development</h3>
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
          </div>
          <div className={styles.cardIMG} style={{}}>
            <BlurHashImages
              src={webDesign}
              style={{ marginLeft: "auto" }}
              hashCode={webHash}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;
