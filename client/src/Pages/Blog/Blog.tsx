import React, { useEffect, useState } from "react";
import styles from "./Blog.module.scss";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Main/Footer";
import Card from "./component/Card";
import HeaderCard from "./component/HeaderCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../assets/Home/web.jpg";
import viteSplit from "../../assets/Blog/viteSplitting.png";
import vs from "../../assets/Blog/vs.png";
import vss from "../../assets/Blog/vss.png";
import img2 from "../../assets/Home/box.jpg";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_API_KEY } from "../../../config";
import { motion, useScroll } from "framer-motion";
import ReactPaginate from "react-paginate";
import useSWR from "swr";

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

//Todo
/*
   Onclick update global variables to be shown on blog page using redux
   Query blog table to get, img, author + date, description, tag, place latest 3 on buttom, top always shows latest entry
   Add pagenation
*/
interface BlogPost {
  blog_post_id: number;
  publish_date: string;
  date: string;
  author: string;
  title: string;
  content: string;
  slug: string;
  images: Image[];
}

interface Image {
  image_url: string;
  image_id: number;
}
const tags = ["UX Design", "AI", "Art"];
const titleTags = ["Code Splitting", "Performance", "Vite"];
const Blog = () => {
  const [blogData, setBlogData] = useState<BlogPost[] | null>(null);
  const [blogError, setBlogError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  // useEffect(() => {
  //   const fetchBlogData = async () => {
  //     const { data, error } = await supabase
  //       .from("Blog")
  //       .select(`*, Images(image_url, image_id)`);
  //     if (error) {
  //       setBlogData(null);
  //       setBlogError("Couldn't get Blog Data, sorry try again later.");
  //       console.log(error);
  //     }
  //     if (data) {
  //       console.log("THIIS IS DATA:", data);
  //       // @ts-ignore
  //       setBlogData(data);
  //       setBlogError(null);
  //     }
  //   };
  //   fetchBlogData();
  // }, []);

  const { data, error } = useSWR("Blog", async () => {
    const { data, error } = await supabase
      .from("Blog")
      .select(`*, Images(image_url, image_id)`);
    if (error) {
      throw new Error("Couldn't get Blog Data, sorry try again later.");
    }
    console.log("DATA:", data);
    return data;
  });
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log("THIS IS BLOG DATA:", data);
      setBlogData(data);
    }
  }, [data, error]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  //need to save blog_post_id when clicking link so that we can grab the correct blog from the supabase db
  const loadBlogColumns = () => {
    if (blogData === null) {
      console.log(typeof data, "type");
      return null;
    }
    const startIndex = currentPage * 3;
    const endIndex = startIndex + 3;
    const blogDataArray = Object.values(blogData);
    console.log(blogDataArray, "BLOGARRAY");
    return blogDataArray.slice(startIndex, endIndex).map((blog) => {
      let imageUrl = "";
      for (let i = 0; i < blog.Images.length; i++) {
        if (blog.Images[i].image_url) {
          imageUrl = blog.Images[i].image_url;
          break;
        }
      }
      return (
        <Link
          to={`/blog/${blog.slug}`}
          className={styles.gridItem}
          key={blog.slug}
          state={{ data: blog }}
        >
          <Card
            author={blog.author}
            date={blog.date}
            title={blog.title}
            description={blog.content}
            tags={tags}
            img={imageUrl}
          />
        </Link>
      );
    });
  };

  return (
    <div className={styles.mainWrapper}>
      <Nav />
      <div className={styles.wrapper}>
        <motion.div
          initial={{ scale: 10 }}
          animate={{
            scale: 9,
            transition: { ease: "easeIn", duration: 0.4 },
          }}
          className={styles.backgroundText}
        >
          BLOG
        </motion.div>{" "}
        <HeaderCard
          title={
            "Boosting Your Web App's Performance with Vite and Code Splitting"
          }
          date={"May 11th, 2023"}
          description={
            "Upgrading Your Web Development Workflow with Vite and Code Splitting"
          }
          tags={titleTags}
          img={vss}
        />
        <div className={styles.cardWrapper}>
          <div className={styles.cardContainer}>{loadBlogColumns()}</div>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <ReactPaginate
            previousLabel={<FaArrowLeft />}
            nextLabel={<FaArrowRight />}
            breakLabel="..."
            pageCount={2}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={styles.paginateContainer}
            pageClassName={styles.pageItem}
            pageLinkClassName={styles.pageLink}
            previousClassName={
              currentPage === 0 ? styles.buttonDisabled : styles.previous
            }
            previousLinkClassName={styles.linkA}
            nextLinkClassName={styles.linkA}
            activeClassName={styles.pageItemSelected}
            nextClassName={
              currentPage === 0 ? styles.next : styles.buttonDisabled
            }
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
