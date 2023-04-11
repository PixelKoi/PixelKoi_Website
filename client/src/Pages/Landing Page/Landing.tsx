import Header from "./components/Header/Header";
import Clients from "../Landing Page/components/Clients/Clients";
import "../../styles/globalStyles.css";
import styles from "./Landing.module.css";
import Offer from "./components/Offer/Offer";
import Global from "./components/Global/Global";
import OurTech from "./components/OurTech/OurTech";
import Footer from "../../components/Footer/Main/Footer";
import NavGroup from "../../components/Nav/NavGroup";
import React, { useState, useEffect } from "react";
import { GridLoader } from "react-spinners";
import BlurHashEncoder from "../../components/BlurHashEncoder/BlurHashEncoder";
import BlurHashDecoder from "../../components/BlurHashEncoder/BlurHashDecoder";
const Landing = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Simulate a delay in loading the page
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className={styles.spinnerAnimation}>
          <GridLoader size={25} color="#e8985c" />
        </div>
      ) : (
        <main className={styles.mainContainer}>
          {" "}
          <BlurHashDecoder />
          <NavGroup />
          {/*<BlurHashEncoder />*/}
          <Header />
          <OurTech />
          <Offer />
          <Global />
          {/*
			<About />
			<Team />
			<Clients /> */}
          <Clients />
          <OurTech />
          <Footer />
        </main>
      )}
    </div>
  );
};

export default Landing;
