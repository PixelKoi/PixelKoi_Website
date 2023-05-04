import React from "react";
import styles from "./BlogPage.module.scss";
import Nav from "../../components/Nav/Nav";
import { useLocation } from "react-router-dom";

const BlogPost = () => {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "10rem auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
      borderRadius: "5px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#333",
    },
    author: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "5px",
      color: "#666",
    },
    date: {
      fontSize: "16px",
      fontWeight: "normal",
      marginBottom: "20px",
      color: "#999",
    },
    content: {
      fontSize: "18px",
      lineHeight: "28px",
      color: "#333",
    },
  };

  // @ts-ignore
  const { state } = useLocation<{ data: BlogData }>();
  const { data } = state;
  let imageUrl = "";
  for (let i = 0; i < data.Images.length; i++) {
    if (data.Images[i].image_url) {
      imageUrl = `/${data.Images[i].image_url}`;
      break;
    }
  }
  console.log("imageUrl: ", imageUrl);
  return (
    <div style={styles.container}>
      <img src={imageUrl} alt="Blog post header image" />
      <h1 style={styles.title}>{data.title}</h1>
      <h3 style={styles.author}>By {data.author}</h3>
      <h3 style={styles.date}>{data.date}</h3>
      <p style={styles.content}>{data.content}</p>
    </div>
  );
};

export default BlogPost;
