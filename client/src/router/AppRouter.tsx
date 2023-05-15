import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing Page/Landing";
import About from "../Pages/About/About";
import { Contact } from "../Pages/Contact/Contact2";
import Blog from "../Pages/Blog/Blog";
import BlogPost from "../Pages/Blog/BlogPost";
import BlurHashDecoder from "../components/BlurHashEncoder/BlurHashDecoder";
const AppRouter = () => {
  return (
    <BlurHashDecoder>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />
      </Routes>
    </BlurHashDecoder>
  );
};

export default AppRouter;
