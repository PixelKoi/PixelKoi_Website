import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing Page/Landing";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import BlogPage from "../Pages/Blog/BlogPost";
import { Contact } from "../Pages/Contact/Contact2";
import BlurHashDecoder from "../components/BlurHashEncoder/BlurHashDecoder";
import CaseStudy from "../Pages/Case Study/CaseStudy";
const AppRouter = () => {
	return (
		<BlurHashDecoder>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:id" element={<BlogPage />} />
				<Route path="/casestudy" element={<CaseStudy />} />
			</Routes>
		</BlurHashDecoder>
	);
};

export default AppRouter;
