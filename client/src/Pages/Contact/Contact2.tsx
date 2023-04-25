import React, { useState, useEffect, useRef, useContext } from "react";
import Nav from "../../components/Nav/Nav";
import styles from "./Contact2.module.scss";
import Footer from "../../components/Footer/ContactPage/FooterContactPage";
import { motion, useScroll } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import mailboxImg from "../../assets/Home/mailbox.jpg";
import { Blurhash } from "react-blurhash";
import { HashContext } from "../../components/BlurHashEncoder/BlurHashDecoder";
import { Helmet } from 'react-helmet';

interface ImageType {
  [name: string]: {
    url: string;
    hash: string;
  };
}

interface FormData {
  name: string;
  email: string;
  budget: string;
  phone: string;
  description: string;
}

export const Contact = () => {
  const hashData = useContext<ImageType>(HashContext);
  const mailboxHash = hashData["mailboxImg"].hash;
  const ref = useRef<HTMLImageElement>(null);
  const [form, setForm] = useState("default");
  const [emptyFieldHook, setEmptyFieldHook] = useState<string>("");
  const [validateField, setValidateField] = useState<string>("");
  const initialContactInformation = {
    name: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  };
  const [contactInformation, setContactInformation] = useState<FormData>(
    initialContactInformation
  );

  const resetContactInformation = () =>
    setContactInformation(initialContactInformation);
  const emptyField = Object.entries(contactInformation).find(
    ([key, value]) => !value
  );

  const validateInput = (value: string, pattern: RegExp): boolean => {
    console.log(value);
    return pattern.test(value);
  };
  const validateContactInformation = (
    contactInformation: FormData
  ): boolean => {
    const patterns = {
      name: /^[A-Za-z\s]+$/,
      email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
      phone: /^\d+$/,
      budget: /^\d+$/,
      description: /^[a-zA-Z0-9@#$%^&+=*()\[\]\\\',.?":{}|<>\/\s]+$/,
    };

    for (const [key, value] of Object.entries(contactInformation)) {
      const pattern = patterns[key as keyof typeof patterns];
      if (!validateInput(value, pattern)) {
        getErrorMessage(key);
        setForm("validationError");
        return true;
      }
    }
    setForm("complete");
    return false;
  };

  const getErrorMessage = (key: string) => {
    switch (key) {
      case "name":
        setValidateField(
          '"Please enter a valid name with only letters and spaces.";'
        );
        setForm("validationError");
        return true;
      case "email":
        setValidateField("Please enter a valid email address.");
        setForm("validationError");

        return true;
      case "phone":
        setValidateField("Please enter a valid phone number with only digits.");
        setForm("validationError");

        return true;
      case "budget":
        setValidateField(
          "Please enter a valid budget amount with only digits."
        );
        setForm("validationError");

        return true;
      case "description":
        setValidateField(
          "Only alphanumeric characters and select special characters are allowed. Special characters include: @#$%^&+=*()[]\\',.?\":{}|<>/ and whitespace."
        );
        setForm("validationError");

        return true;

      default:
        setValidateField(
          "There was an error with your submission. Please try again later."
        );
        setForm("complete");
        return false;
    }
  };

  const email_url = "http://localhost:8000/send-email";
  const emailPostOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactInformation),
  };

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
  const location = useLocation();

  useEffect(() => {
    scrollYProgress.onChange((v) => setHookedYPosition(v));
  }, [scrollYProgress]);

  const handleSubmit: React.FormEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    if (handleValidation() === false) {
      return;
    }
    fetch(email_url, emailPostOptions)
      .then((response) => response.json())
      .then((data) => console.log(data.message))
      .catch((error) => {
        console.error("We've run into an error: ", error);
      });
    resetContactInformation();
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
      case "emptyError":
        return (
          <div className={styles.formError}>
            <div style={{ fontWeight: "bold" }}>
              {emptyField ? (
                <span>
                  The field{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontSize: "1.2em",
                    }}
                  >
                    {emptyFieldHook}
                  </span>{" "}
                  cannot be empty. Please fill it out and try again.
                </span>
              ) : (
                "We're sorry, but there was an error submitting your proposal. Please try again later or contact our support team: info@pixelkoi.com for assistance."
              )}
            </div>
          </div>
        );
      case "validationError":
        return (
          <div className={styles.formError}>
            <div style={{ fontWeight: "bold" }}>
              {validateField ? (
                <span
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: "1.2em",
                  }}
                >
                  {validateField}
                </span>
              ) : (
                "We're sorry, but there was an error submitting your proposal. Please try again later or contact our support team: info@pixelkoi.com for assistance."
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  //Check phone number
  const handleValidation = () => {
    if (emptyField) {
      console.log("Empty field here god damn it", emptyField[0]);
      setEmptyFieldHook(emptyField[0]);
      setForm("emptyError");
      return false;
    } else if (validateContactInformation(contactInformation)) {
      return false;
    }
    setForm("complete");
    return true;
  };
  const [loaded, setLoaded] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setContactInformation({ ...contactInformation, [name]: value });
    console.log(contactInformation);
  };
  useEffect(() => {
    const img = new Image();
    img.src = mailboxHash;
    img.onload = () => {
      setLoaded(true);
    };
  }, [mailboxHash]);
  return (
    <div>
		<Helmet>
     		<title>Contact Page</title>
        	<meta name="description" content="Unlock Your Business Potential: Our versatile team of Software Developers, UX Designers, and
						Project Managers collaborate seamlessly to transform your vision into reality and propel your
						business objectives forward." />
        	<meta property="og:title" content="Contact Page" />
        	<meta property="og:description" content="Unlock Your Business Potential: Our versatile team of Software Developers, UX Designers, and
						Project Managers collaborate seamlessly to transform your vision into reality and propel your
						business objectives forward." />
		</Helmet>
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
                value={contactInformation.name}
                onChange={handleInputChange}
                required
              />
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  className={styles.input}
                  maxLength={256}
                  name="email"
                  data-name="user-email"
                  placeholder="Email address"
                  value={contactInformation.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  className={styles.input}
                  maxLength={256}
                  name="phone"
                  value={contactInformation.phone}
                  data-name="user-phone"
                  placeholder="Contact Phone"
                  onChange={handleInputChange}
                  pattern="[0-9]*"
                  title="Please enter only numbers"
                  required
                  // onBlur={handleCheckNumber}
                />
              </div>
              <input
                type="text"
                className={styles.input}
                maxLength={256}
                name="budget"
                data-name="user-budget"
                placeholder="Budget"
                value={contactInformation.budget}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="description"
                placeholder="Describe your project..."
                maxLength={5000}
                value={contactInformation.description}
                data-name="text-area"
                className={`${styles.input2} ${styles.textArea} `}
                onChange={handleInputChange}
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
          <img
            loading="lazy"
            className={styles.bgIMG}
            src={mailboxImg}
            alt=""
          />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};
