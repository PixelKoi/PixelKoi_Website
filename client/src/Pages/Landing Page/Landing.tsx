import Header from "./components/Header/Header";
import Clients from "../Landing Page/components/Clients/Clients";
import "../../styles/globalStyles.css";
import styles from "./Landing.module.css";
import Nav from "../../components/Nav/Nav";
import Offer from "./components/Offer/Offer";
import Global from "./components/Global/Global2";
import OurTech from "./components/OurTech/OurTech";
import Footer from "../../components/Footer/Footer";
import NavGroup from "../../components/Nav/NavGroup";
import React, { useState, useEffect } from "react";
import { GridLoader } from "react-spinners";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Unlock Your Business Potential: Our versatile team of Software Developers, UX Designers, and
						Project Managers collaborate seamlessly to transform your vision into reality and propel your
						business objectives forward."
        />
        <meta property="og:title" content="Home Page" />
        <meta
          property="og:description"
          content="Unlock Your Business Potential: Our versatile team of Software Developers, UX Designers, and
						Project Managers collaborate seamlessly to transform your vision into reality and propel your
						business objectives forward."
        />
      </Helmet>
      {isLoading ? (
        <div className={styles.spinnerAnimation}>
          <GridLoader size={25} color="#e8985c" />
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
