import React from "react";
import styles from "./HeaderCard.module.scss";
import img from "../../../assets/Home/web.jpg";

const HeaderCard = (props) => {
  const tags = props.tags;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={props.img} />
        <div className={styles.infoContainer}>
          <h4>{props.title}</h4>
          <p className={styles.description}>{props.description}</p>
          <b>
            <p className={styles.author}>Garo Nazarian &#x2022; {props.date}</p>
          </b>
        </div>

        <div className={styles.tagWrapper}>
          {tags.map((tag, index) => (
            <div className={styles.tagContainer} key={index}>
              <span className={styles.tagName}>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
