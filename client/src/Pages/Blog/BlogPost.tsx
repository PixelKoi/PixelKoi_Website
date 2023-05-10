import React from "react";
import styles from "./BlogPage.module.scss";
import Nav from "../../components/Nav/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const BlogPost = () => {
  const styles = {
    mainContainer: {},
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
      padding: "0 1rem",
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#333",
    },
    author: {
      padding: "0 1rem",
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "5px",
      color: "#666",
    },
    date: {
      padding: "0 1rem",
      fontSize: "16px",
      fontWeight: "normal",
      marginBottom: "20px",
      color: "#999",
    },
    content: {
      padding: "0 1rem",
      fontSize: "18px",
      lineHeight: "28px",
      color: "#333",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center", // add this line to center vertically
    },
    image: {
      padding: "1rem",
      maxWidth: "100%",
      height: "auto",
      width: "750px",
      maxHeight: "500px",
    },
    button: {
      padding: "0.75rem 1.25rem",
      fontSize: "1rem",
      lineHeight: "1.5",
      borderRadius: "0.25rem",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
      cursor: "pointer",
      transition: "all 0.15s ease-in-out",
      marginTop: "1rem",
    },
    pre: {
      backgroundColor: "#000",
      padding: "16px",
      borderRadius: "4px",
      margin: "0",
    },
    code: {
      display: "block",
      whiteSpace: "pre-wrap",
      fontFamily: "monospace",
      fontSize: "14px",
      lineHeight: "1.5",
      color: "#fff",
    },
  };

  // @ts-ignore
  const { state } = useLocation<{ data: BlogData }>();
  const { data } = state;
  const navigate = useNavigate();
  let imageUrl = "";
  for (let i = 0; i < data.Images.length; i++) {
    if (data.Images[i].image_url) {
      imageUrl = `/${data.Images[i].image_url}`;
      break;
    }
  }
  console.log("imageUrl: ", imageUrl);
  return (
    <div style={styles.mainContainer}>
      <Nav />
      <div style={styles.container}>
        <button style={styles.button} onClick={() => navigate(-1)}>
          Back to All Blogs
        </button>
        {imageUrl && (
          <img src={imageUrl} alt="blog post" style={styles.image} />
        )}
        <h1 style={styles.title}>{data.title}</h1>
        <h3 style={styles.author}>By {data.author}</h3>
        <h3 style={styles.date}>{data.date}</h3>
        <p style={styles.content}>{parse(data.content)}</p>
      </div>
    </div>
  );
};

export default BlogPost;
