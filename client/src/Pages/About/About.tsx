import styles from "./About.module.scss";
import NavGroup from "../../components/Nav/NavGroup";
import Team from "./Team2/Team2";
import Team2 from "./Team3/Team";
import Footer from "../../components/Footer/Main/Footer";
import creative from "./../../assets/About/creative.webp";
import dream from "../../assets/About/dream.webp";
import story from "../../assets/About/story.webp";
import { HashContext } from "../../components/BlurHashEncoder/BlurHashDecoder";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import headerImg from "../../assets/Home/box.jpeg";

interface ImageType {
  [name: string]: {
    url: string;
    hash: string;
  };
}
const About = () => {
  const [dreamLoaded, setDreamLoaded] = useState(false);
  const [creativeLoaded, setCreativeLoaded] = useState(false);
  const [storyLoaded, setStoryLoaded] = useState(false);

  const hashData = useContext<ImageType>(HashContext);
  console.log("About Page Hash Data: ", hashData);
  const creativeHash = hashData["creative"].hash;
  const dreamHash = hashData["dream"].hash;
  const storyHash = hashData["story"].hash;
  // TODO: Discovered reason for image still loading when using setLoaded / loaded hook is because it should use different versions for each image!

  useEffect(() => {
    const images = [dream, creative, story];
    const promises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          resolve(img);
        };
        img.onerror = () => {
          reject();
        };
      });
    });

    Promise.all(promises)
      .then(() => {
        setDreamLoaded(true);
        setCreativeLoaded(true);
        setStoryLoaded(true);
      })
      .catch((error) => {
        console.error("Failed to load images:", error);
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
            {!dreamLoaded ? (
              <div>
                <Blurhash
                  hash={dreamHash}
                  width="550px"
                  height="400px"
                  resolutionX={64}
                  resolutionY={64}
                  punch={1}
                />
              </div>
            ) : (
              <img
                src={dream}
                alt="inspirationalQuote"
                onLoad={() => setDreamLoaded(true)}
                className={styles.aboutImages}
              />
            )}
            {!creativeLoaded ? (
              <div>
                <Blurhash
                  hash={creativeHash}
                  width="550px"
                  height="400px"
                  resolutionX={64}
                  resolutionY={64}
                  punch={1}
                />
              </div>
            ) : (
              <img
                src={creative}
                alt="inspirationalQuote"
                onLoad={() => setCreativeLoaded(true)}
                className={styles.aboutImages}
              />
            )}
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
            {!storyLoaded ? (
              <div>
                <Blurhash
                  hash={storyHash}
                  width="550px"
                  height="400px"
                  resolutionX={64}
                  resolutionY={64}
                  punch={1}
                  className={styles.aboutImages}
                />
              </div>
            ) : (
              <motion.img
                src={story}
                alt=""
                onLoad={() => setStoryLoaded(true)}
              />
            )}

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
      {/* <Team /> */}
      <Team2 />
      <Footer />
    </motion.div>
  );
};

export default About;
