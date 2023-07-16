import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

import { supabase } from "../../../config";
import Footer from "../../components/Footer/Footer";

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
    return <div className="items-center text-center">Loading</div>;
  }

  return (
    <div style={styles.mainContainer}>
      <Nav />
      <div style={styles.container}>
        {imageUrl && (
          <>
            <h1 className="text-center" style={styles.title}>
              {blog.title}
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "0.5rem",
              }}
            >
              <h3 className="text-center" style={styles.author}>
                {" "}
                {blog.author}
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "0.5rem",
              }}
            >
              <div style={{ ...styles.date }}>
                {new Date(blog.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <span style={{ marginRight: "0.5rem" }}>&#8226;</span> 5 minute
                read
              </div>
            </div>

            <div className="py-5" style={styles.imageContainer}>
              <img src={imageUrl} alt="blog post" style={styles.image} />
            </div>
          </>
        )}
        {blog && (
          <>
            <p style={styles.content}>{blog.content}</p>{" "}
          </>
        )}
        <div className="flex text-center rounded my-5">
          <a
            className="flex items-center"
            style={{ ...styles.button }}
            onClick={() => navigate(-1)}
          >
            <span className="mr-2">&#8592;</span>
            View all posts
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  mainContainer: {
    height: "120vw",
  },
  container: {
    maxWidth: "1000px",
    margin: "10rem auto 0",
    padding: "20px",
    // backgroundColor: "#f9f9f9",
    // boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    fontFamily: "Inter, sans-serif", // Fixed the syntax error here
  },
  title: {
    padding: "2rem 1rem",
    fontSize: "36px",
    marginBottom: "10px",
  },
  author: {
    padding: "0 1rem",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#FFFFFFl",
  },
  date: {
    padding: "0 0.5rem",
    fontSize: "16px",
    fontWeight: "normal",
    color: "#FFFFFF",
    opacity: 0.6,
    alignItems: "center",
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
    width: "1000px",
    maxHeight: "600px",
    margin: "0 auto", // Add this line to center the image horizontally
  },

  button: {
    cursor: "pointer",
    transition: "all 0.15s ease-in-out",
    margin: "1rem",
    color: "white",
    textDecoration: "none",

    height: "48px",
    fontSize: "17px",
    border: "1px solid",
    padding: "1rem",
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
