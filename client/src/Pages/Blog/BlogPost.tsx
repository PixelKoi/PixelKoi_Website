import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

import { supabase } from "../../../config";

// Rest of the imports

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Object | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("SLUG", slug);

    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("Blog")
          .select(`*, Images(image_url, image_id)`)
          .eq("slug", slug);

        if (error) {
          throw new Error("Error fetching blog post: " + error.message);
        }
        if (data) {
          console.log("DATABLOGPOST", data);
          setBlog(data[0]);

          for (let i = 0; i < data[0].Images.length; i++) {
            if (data[0].Images[i].image_url) {
              setImageUrl(`/${data[0].Images[i].image_url}`);
              break;
            }
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [slug]);

  if (!blog) {
    return <div>Loading</div>;
  }

  return (
    <div style={styles.mainContainer}>
      <Nav />
      <div style={styles.container}>
        <div className="flex justify-end">
          <button
            className="flex"
            style={styles.button}
            onClick={() => navigate(-1)}
          >
            Back to All Blogs
          </button>
          <button className="flex" style={styles.button}>
            Sign in
          </button>
        </div>

        {imageUrl && (
          <img src={imageUrl} alt="blog post" style={styles.image} />
        )}
        {blog && (
          <>
            <h1 style={styles.title}>{blog.title}</h1>
            <h3 style={styles.author}>By {blog.author}</h3>
            <h3 style={styles.date}>{blog.date}</h3>
            <p style={styles.content}>{blog.content}</p>{" "}
          </>
        )}
      </div>
    </div>
  );
};

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
    borderRadius: "0.25rem",
    backgroundColor: "#007bff",
    color: "#fff",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
    cursor: "pointer",
    transition: "all 0.15s ease-in-out",
    margin: "1rem",
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

export default BlogPost;
