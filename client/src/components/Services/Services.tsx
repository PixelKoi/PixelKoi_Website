import "./Services.scss";
import { gsap } from "gsap";
import "../../styles/globalStyles.css";
import SouthIcon from "@mui/icons-material/South";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React, { useEffect, useRef, useState, useContext } from "react";
const Services = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    "Transform Your Online Presence with Our Expert Web Development Solutions!",
    "Whether you need a custom site, a WordPress site or a Webflow site.",
    "Our skilled developers have you covered with extensive knowledge.",
    "We bring your vision to life with cutting-edge solutions that drive results.",
    "Partner with us today and elevate your online presence!",
  ];

  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  useEffect(() => {
    gsap.to([circle.current, circleRed.current, circleBlue.current], {
      delay: 0.2,
      opacity: 0.8,
      x: 40,
      ease: "Power3.easeOut",
      stagger: 0.2,
      visibility: "visible",
    });
    const textBox = document.getElementById("text");
    const message = document.querySelector(".message");
    let start: number | null = null;

    const animation = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      if (progress < 8000) {
        textBox!.scrollTo(progress, 50);
        window.requestAnimationFrame(animation);
      } else {
        textBox!.scrollTo(0, 0);
        start = null;
        setCurrentMessageIndex((currentMessageIndex + 1) % messages.length);
      }
    };

    window.requestAnimationFrame(animation);
  }, [currentMessageIndex]);

  return (
    <div className="services">
      <div className="circle-container">
        <div ref={circle} className="circle"></div>
        <div ref={circleRed} className="circle red"></div>
        <div ref={circleBlue} className="circle blue"></div>
      </div>
      <div id="text-box">
        <div id="text">
          <div className="message" key={currentMessageIndex}>
            {messages[currentMessageIndex]}
          </div>
        </div>
      </div>{" "}
      <br />
    </div>
  );
};

export default Services;
