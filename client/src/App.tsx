import Footer from './components/Footer/Footer';
import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/helpers/ScrollToTop';
import { CustomCursor } from './components/CustomCursor/CustomCursor';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
