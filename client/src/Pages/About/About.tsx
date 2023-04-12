import styles from "./About.module.scss";
import NavGroup from "../../components/Nav/NavGroup";
import Team from "./Team2/Team2";
import Footer from "../../components/Footer/Main/Footer";
import creative from "./../../assets/About/creative.webp";
import dream from "../../assets/About/dream.webp";
import story from "../../assets/About/story.webp";
import { HashContext } from "../../components/BlurHashEncoder/BlurHashDecoder";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

interface ImageType {
  [name: string]: {
    url: string;
    hash: string;
  };
}
const About = () => {
  const [loaded, setLoaded] = useState(false);
  const hashData = useContext<ImageType>(HashContext);
  console.log("About Page Hash Data: ", hashData);
  const creativeHash = hashData["creative"].hash;
  const dreamHash = hashData["dream"].hash;
  const storyHash = hashData["story"].hash;
  // TODO: Discovered reason for image still loading when using setLoaded / loaded hook is because it should use different versions for each image!

  useEffect(() => {
    const aboutImages = [creative, dream, story];
    // resolves when all images are loaded successfully, and rejects if there is an error loading an image
    Promise.all(
      aboutImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    )
      .then(() => {
        setLoaded(true);
      })
      .catch((err) => {
        console.error("Failed to load images: ", err);
      });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className={styles.wrapper}
    >
      <NavGroup />
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.headerText}>
            <h1>
              <i>Our Agency</i>
            </h1>
            <p style={{ fontSize: "20px" }}>
              Pixel Koi is an innovative software development agency dedicated
              to crafting impactful experiences through Website and Mobile
              applications
            </p>
          </div>
          <div className={styles.newAboutImageContainer}>
            <div style={{ display: loaded ? "none" : "inline" }}>
              <Blurhash
                hash={dreamHash}
                width="100%"
                height="100%"
                resolutionX={64}
                resolutionY={64}
                punch={1}
                className={styles.newAboutImages}
              />
            </div>
            <img
              src={dream}
              alt="inspirationalQuote"
              className={styles.newAboutImages}
            />
            <div style={{ display: loaded ? "none" : "inline" }}>
              <Blurhash
                hash={creativeHash}
                width="100%"
                height="100%"
                resolutionX={64}
                resolutionY={64}
                punch={1}
                className={styles.newAboutImages}
              />
            </div>
            <img
              onLoad={() => setLoaded(true)}
              src={creative}
              alt="inspirationalQuote"
              className={styles.newAboutImages}
            />
          </div>
          <div className={styles.description}>
            <p>
              We are a{" "}
              <span className={styles.hightlight}>
                <b>curious</b>
              </span>{" "}
              and
              <span className={styles.hightlight}>
                <b> creative</b>
              </span>{" "}
              team of skilled professionals, each with our own unique niches of
              expertise, coming together to deliver exceptional results through
              shared passion, curiosity and
              <span className={styles.hightlight}> meticulous</span> planning,
              we work closely with our clients during each stage of the project
              to comprehend their distinctive requirements and provide excellent
              user experiences for their users. Through our expertise and
              inventive solutions, we carve a path that leads to a product that
              exceeds expectations. Our proven track record and unwavering
              commitment to improving our designs and ingenuity is a testament
              to our dedication to deliver excellence in every project we choose
              to undertake. When you work with us, you can be confident that you
              are partnering with a team of true professionals who will help you
              achieve your goals and take your brand to the next level.
            </p>
          </div>
        </div>

        <div className={styles.section} id={styles.ourStory}>
          <div className={styles.headerText}>
            <h3 style={{ color: "#FFA500" }}>Our Story</h3>
          </div>
          <div className={styles.imgContainer}>
            <div>
              <div style={{ display: loaded ? "none" : "inline" }}>
                <Blurhash
                  hash={storyHash}
                  width="100%"
                  height="100%"
                  resolutionX={64}
                  resolutionY={64}
                  punch={1}
                  className={styles.aboutImages}
                />
              </div>
              <motion.img src={story} alt="" className={styles.aboutImages} />
            </div>
            <p>
              As a team of experienced professional software engineers, we bring
              our passion for problem-solving and ingenuity to each project we
              decide to undertake. With a keen attention to detail, and
              insatiable curiosity, we work closely with our select clients
              throughout the entire development process to gain a deep
              understanding of their unique needs. Our goal is to deliver a
              seamless user experience, creating unique and memorable brands for
              our clients that not only meets but exceeds users and clients
              expectations. We take great pride in our ability to tackle complex
              challenges and provide customized solutions that drive our
              clients' success.
            </p>
          </div>
        </div>
      </div>
      <Team />
      <Footer />
    </motion.div>
  );
};

export default About;
