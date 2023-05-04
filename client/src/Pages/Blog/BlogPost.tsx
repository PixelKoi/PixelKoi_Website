import React from "react";
import styles from "./BlogPage.module.scss";
import Nav from "../../components/Nav/Nav";
import { useLocation } from "react-router-dom";

const BlogPost = () => {
  // @ts-ignore
  const { state } = useLocation<{ data: BlogData }>();
  const { data } = state;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      {/* ... */}
    </div>
  );
};

export default BlogPost;
