import Header from "./components/Header/Header";
import Clients from "../Landing Page/components/Clients/Clients";
import "../../styles/globalStyles.css";
import styles from "./Landing.module.css";
import Nav from "../../components/Nav/Nav";
import Offer from "./components/Offer/Offer";
import Global from "./components/Global/Global";
import OurTech from "./components/OurTech/OurTech";
import Footer from "../../components/Footer/Main/Footer";
import NavGroup from "../../components/Nav/NavGroup";
import React, { useState, useEffect } from "react";
import { GridLoader } from "react-spinners";

const Landing = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay in loading the page
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <div className="loading-overlay">
          <GridLoader size={50} color="#123abc" />
        </div>
      ) : (
        <main className={styles.mainContainer}>
          {" "}
          <NavGroup />
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
