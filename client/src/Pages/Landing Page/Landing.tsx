import Header from './components/Header/Header';
import Team from '../Landing Page/components/Team/Team';
import Clients from '../Landing Page/components/Clients/Clients';
import '../../styles/globalStyles.css';
import styles from './Landing.module.css';
import { scroller } from 'react-scroll';
import Footer from '../../components/Footer/Footer';
import Nav2 from '../../components/Nav/Nav2';
import Offer from './components/Offer/Offer';
import About from './components/About/About';
const Landing = (props: any) => {
	const scrollToSection = () => {
		scroller.scrollTo('services', {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart'
		});
	};

	return (
		<main className={styles.mainContainer}>
			<Nav2 />
			<Header scrollRef={scrollToSection} />
			<Offer />
			<About />
			<Team />
			<Clients />
			<Footer />
		</main>
	);
};

export default Landing;
