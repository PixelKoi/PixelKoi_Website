import React, { useState, useEffect, useRef, useContext } from "react";
import Nav from "../../components/Nav/Nav";
import styles from "./Contact2.module.scss";
import Footer from "../../components/Footer/ContactPage/FooterContactPage";
import { motion, useScroll } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai";
import mailboxImg from "../../assets/Home/mailbox.jpg";
import { Blurhash } from "react-blurhash";
import { HashContext } from "../../components/BlurHashEncoder/BlurHashDecoder";

interface ImageType {
  [name: string]: {
    url: string;
    hash: string;
  };
}

// TODO: Add email and name checks / make sure the information is filled out.
// TODO: Add Submission check, display and Animate,
// TODO: Add functionality for

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [warningEmail, setWarningEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [warningPhone, setWarningPhone] = useState(false);
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [form, setForm] = useState("");

  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (ref.current) {
        const { top, height } = ref.current.getBoundingClientRect();
        const percentVisible = (window.innerHeight - top) / height;
        const translateY = (1 - percentVisible) * -20;
        ref.current.style.transform = `translateY(${translateY}%)`;
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { scrollYProgress } = useScroll();
  const [hookedYPostion, setHookedYPosition] = React.useState(0);
  //smooth transition for scrolling through divs on landing page
  const location = useLocation();

  useEffect(() => {
    // hook into the onChange, store the current value as state.
    scrollYProgress.onChange((v) => setHookedYPosition(v));
  }, [scrollYProgress]); //make sure to re-subscriobe when scrollYProgress changes

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (handleValidation() === false) {
      return;
    } else {
      fetch("http://localhost:8000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          budget,
          description,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
        })
        .catch((error) => {
          console.error("We've run into an error: ", error);
        });
    }
    setDescription("");
    setPhone("");
    setBudget("");
    setName("");
    setEmail("");
  };

  //Show Contact form based on state
  const showSubmitMessage = (form: String) => {
    switch (form) {
      case "complete":
        return (
          <div className={styles.formSucess}>
            <div>Thank you! Your submission has been received!</div>
          </div>
        );
      case "error":
        return (
          <div className={styles.formError}>
            <div>
              Oops! Something went wrong while submitting the form. Make sure
              all fields are filled out correctly.
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  //Check email input for '@'
  const handleCheckEmail = () => {
    if (email.length === 0 || !email.includes("@")) {
      setWarningEmail(email.length !== 0);
    } else {
      setWarningEmail(false);
      return false;
    }
  };

  //Check phone number
  const handleCheckNumber = () => {
    const phoneRegex = /^\+(?:[0-9]●?){6,14}[0-9]$/;
    if (phoneRegex.test(phone) === false) {
      setWarningPhone(true);
    } else {
      setWarningPhone(false);
    }
  };

  const handleValidation = () => {
    if (
      name === "" ||
      email === "" ||
      budget === "" ||
      phone === "" ||
      description === ""
    ) {
      setForm("error");
      return false;
    }
    setForm("complete");
    return true;
  };
  const [loaded, setLoaded] = useState(false);
  const hashData = useContext<ImageType>(HashContext);
  const mailboxHash = hashData["mailboxImg"].hash;
  console.log(mailboxHash);
  useEffect(() => {
    const img = new Image();
    img.src = mailboxHash;
    img.onload = () => {
      setLoaded(true);
    };
  }, [mailboxHash]);
  return (
    <div>
      <Nav />
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.title}>
            <motion.h1
              className={styles.headerText}
              initial={{ opacity: 0, y: 80 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.4 },
              }}
            >
              Get In Touch
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.4 },
              }}
              className={styles.links}
            >
              <Link to="/">Home</Link>
              <Link to="/#services">Services</Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{
              scale: 1,
              transition: { ease: "easeIn", duration: 0.4 },
            }}
            className={styles.backgroundText}
          >
            CONTACTS
          </motion.div>
        </div>
      </div>

      <motion.div className={styles.formSection}>
        <motion.div className={styles.wrapper}>
          <motion.div className={styles.contact}>
            <div className={styles.intro}>
              <strong>
                <em />
              </strong>
              <strong>
                <em />
              </strong>
              <h2>Let's Work Together</h2>
              <div className={styles.divider} />
              <div>
                Send us a message today to start transforming your ideas into
                innovative software solutions.
              </div>
            </div>
            <motion.form className={styles.form}>
              <input
                type="text"
                className={styles.input}
                maxLength={256}
                name="name"
                data-name="user-name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  className={styles.input}
                  maxLength={256}
                  name="email"
                  data-name="user-email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleCheckEmail}
                />
                <div
                  className={styles.warningBox}
                  style={{ display: warningEmail === false ? "none" : "block" }}
                >
                  <div className={styles.innerCheckEmail}>
                    <AiFillWarning className={styles.warningIcon} />
                    <p className={styles.emailWarningText}>
                      Please include '@' in your email address!
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  className={styles.input}
                  maxLength={256}
                  name="phone"
                  value={phone}
                  data-name="user-phone"
                  placeholder="Contact Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  // onBlur={handleCheckNumber}
                />
                <div
                  className={styles.warningBox}
                  style={{ display: warningPhone === false ? "none" : "block" }}
                >
                  <div className={styles.innerCheckEmail}>
                    <AiFillWarning className={styles.warningIcon} />
                    <p className={styles.emailWarningText}>
                      Please include '@' in your email address!
                    </p>
                  </div>
                </div>
              </div>
              <input
                type="text"
                className={styles.input}
                maxLength={256}
                name="budget"
                data-name="user-budget"
                placeholder="Budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
              <textarea
                name="text-area"
                placeholder="Describe your project..."
                maxLength={5000}
                value={description}
                data-name="text-area"
                className={`${styles.input2} ${styles.textArea} `}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="submit"
                onClick={handleSubmit}
                value="Submit Message"
                data-wait="Please wait..."
                className={styles.button}
              />
            </motion.form>
            {showSubmitMessage(form)}
          </motion.div>
        </motion.div>
        <motion.div
          ref={ref}
          style={{ willChange: "transform" }}
          className={styles.contact2}
        >
          <motion.div style={{ display: loaded ? "none" : "inline" }}>
            <Blurhash
              hash={mailboxHash}
              width="100%"
              height="100%"
              resolutionX={64}
              resolutionY={64}
              punch={1}
              className={styles.bgIMG}
            />
          </motion.div>
          <img className={styles.bgIMG} src={mailboxImg} alt="" />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};
