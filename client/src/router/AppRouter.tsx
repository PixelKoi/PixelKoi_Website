import { Route, Routes } from 'react-router-dom';
import Landing from '../Pages/Landing Page/Landing';
import About from '../Pages/About/About';
import { Contact } from '../Pages/Contact/Contact';
import Framer from '../Pages/FramerMotionExamples/examples/framer_examples';
import { LPGroup } from '../Pages/Landing Page/LPGroup';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<LPGroup />} />
			<Route path="/about" element={<About />} />
			<Route path="/framer" element={<Framer />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
};

export default AppRouter;
