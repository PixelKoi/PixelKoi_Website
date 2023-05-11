import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing Page/Landing";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import BlogPage from "../Pages/Blog/BlogPost";
import { Contact } from "../Pages/Contact/Contact2";
import BlurHashDecoder from "../components/BlurHashEncoder/BlurHashDecoder";
import CaseStudy from "../Pages/Case Study/CaseStudy";
import CreateBlog from "../Pages/Blog/CreateBlog";
import { SWRConfig } from "swr/_internal";
import axios from "axios";
const AppRouter = () => {
  return (
    <BlurHashDecoder>
      <SWRConfig
        value={{ fetcher: (url: string) => axios(url).then((r) => r.data) }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/createblog" element={<CreateBlog />} />
        </Routes>
      </SWRConfig>
    </BlurHashDecoder>
  );
};

export default AppRouter;
