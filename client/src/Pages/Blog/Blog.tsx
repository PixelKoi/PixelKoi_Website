import React, { useEffect, useState } from "react";
import styles from "./Blog.module.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Main/Footer";
import Card from "./component/Card";
import HeaderCard from "./component/HeaderCard";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../assets/Home/web.jpg";
import img2 from "../../assets/Home/box.jpg";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_API_KEY } from "../../../config";

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

//Todo
/*
   Onclick update global variables to be shown on blog page using redux
   Query blog table to get, img, author + date, description, tag, place latest 3 on buttom, top always shows latest entry
   Add pagenation
*/
interface BlogData {
  title: string;
  content: string;
  author: string;
}
const tags = ["UX Design", "AI", "Art"];
const Blog = () => {
  const [blogData, setBlogData] = useState<BlogData[] | null>(null);
  const [blogError, setBlogError] = useState<string | null>(null);
  useEffect(() => {
    const fetchBlogData = async () => {
      const { data, error } = await supabase.from("Blog").select();
      if (error) {
        setBlogData(null);
        setBlogError("Couldn't get Blog Data, sorry try again later.");
        console.log(error);
      }
      if (data) {
        // @ts-ignore
        setBlogData(data);
        setBlogError(null);
      }
    };
    fetchBlogData();
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <Nav />
      <div className={styles.wrapper}>
        {blogError && <p>{blogError}</p>}
        {blogData && (
          <ul>
            {blogData.map((blog) => (
              <li key={blog.author}>{blog.author}</li>
            ))}
          </ul>
        )}

        <h1>Musings from our collective</h1>
        <br />
        <h6>
          The latest industry news, interviews, technologies, and resources
        </h6>
        <HeaderCard
          title={"AI will kill all"}
          date={"May 16th, 1991"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          }
          tags={tags}
          img={img2}
        />
        <div className={styles.cardWrapper}>
          <div className={styles.cardContainer}>
            <Link to="/bpage" className={styles.gridItem}>
              <Card
                title={"AI will kill all"}
                date={"May 16th, 1991"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                }
                tags={tags}
                img={img}
              />
            </Link>
            <Link to="/bpage" className={styles.gridItem}>
              <Card
                title={"AI will kill all"}
                date={"May 16th, 1991"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                }
                tags={tags}
                img={img}
              />
            </Link>
            <Link to="/bpage" className={styles.gridItem}>
              <Card
                title={"AI will kill all"}
                date={"May 16th, 1991"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
                }
                tags={tags}
                img={img}
              />
            </Link>
          </div>
        </div>
        {/* Add Pagenation */}
        <div className={styles.pageContainer}>
          <div className={styles.leftArrow}>
            <div className={styles.icon}>
              <FaLongArrowAltLeft size={35} />
            </div>
            <p>Previous</p>
          </div>
          <div className={styles.rightArrow}>
            <p>Next</p>
            <div className={styles.icon}>
              <FaLongArrowAltRight size={35} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
