import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_API_KEY, SUPABASE_URL } from "../../../config";

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Object | null>(null);

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
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPost;
