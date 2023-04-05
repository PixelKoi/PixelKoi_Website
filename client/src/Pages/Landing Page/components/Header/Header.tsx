// import './Header.css';
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Blurhash } from "react-blurhash";
import { decode, encode } from "blurhash";
import "../../../../styles/globalStyles.css";
import styles from "./Header.module.scss";
import OurTech from "../OurTech/OurTech";
import { motion } from "framer-motion";
import SpinningImage from "./components/3Dsquare/SpinningImage";
import Cube from "./components/Cube/Cube";
import cube from "../../../../assets/Home/ph_cube.svg";
import koi from "../../../../assets/Home/koi.svg";
import { Link, useLocation } from "react-router-dom";
import headerImg from "../../../../assets/Home/box.jpg";
import ParticlesBackground from "../../../../components/Particles/ParticlesBackground";
import Particles from "react-tsparticles";
const Header = (props: any) => {
  const list = { show: { opacity: 1, transition: { staggerChildren: 0.09 } } };
  const item = { show: { y: 0, opacity: 1, transition: { duration: 0.5 } } };
  const [blurhash, setBlurhash] = useState("");

  const loadImage = async (src: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (...args) => reject(args);
      img.src = src;
    });
  const getImageData = (image: HTMLImageElement): ImageData => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    context?.drawImage(image, 0, 0);
    return context!.getImageData(0, 0, image.width, image.height);
  };

  const encodeImageToBlurhash = async (imageUrl: string): Promise<string> => {
    const image = await loadImage(imageUrl);
    const imageData = getImageData(image);
    return encode(imageData.data, imageData.width, imageData.height, 4, 4);
  };
  // TODO: Create encoder component that takes list of images and creates hashObjects
  useEffect(() => {
    const loadImage = async (src: any) => {
      const img = new Image();
      img.src = src;
      await img.decode();
      const canvas = document.createElement("canvas");
      const ctx: any = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const blurhash = encode(
        imageData.data,
        imageData.width,
        imageData.height,
        4,
        4
      );
      setBlurhash(blurhash);
      console.log(blurhash);
      console.log(src);
      // Creating image url and respective blurhash objects
      const hashObjects = { url: src, blurHash: blurhash };
      fetch("/api/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ images: hashObjects }),
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data.images))
        .catch((error) => console.error(error));
    };

    loadImage(headerImg);
  }, []);
  // const blurHash = await encodeImageToBlurhash(headerImg);
  // Test FETCH
  const testHash = { url: "src", blurHash: "blurhash" };
  const hashPostOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ images: testHash }),
  };
  fetch("http://localhost:8000/api/images", hashPostOptions)
    .then((resp) => resp.json())
    // .then((data) => console.log(data.images))
    .catch((error) => console.error(error));
  // TODO: Implement decoder, read imageHash and set blurHash placeholder for header

  return (
    <div className={styles.header} id="header">
      {/*<Blurhash hash={blurHash} width={50} height={50} />*/}
      <div
        className={styles.headerBackgroundImg}
        style={{ backgroundImage: `url(${headerImg})` }}
      >
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
