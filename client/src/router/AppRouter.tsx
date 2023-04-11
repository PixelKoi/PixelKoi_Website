import { Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing Page/Landing";
import About from "../Pages/About/About";
import { Contact } from "../Pages/Contact/Contact2";
import BlurHashDecoder, {
  HashContext,
} from "../components/BlurHashEncoder/BlurHashDecoder";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
