import Header from './components/Header/Header';
import Clients from '../Landing Page/components/Clients/Clients';
import '../../styles/globalStyles.css';
import styles from './Landing.module.css';
import Footer from '../../components/Footer/Footer';
import Nav2 from '../../components/Nav/Nav2';
import Offer from './components/Offer/Offer';
import Global from './components/Global/Global';
import OurTech from './components/OurTech/OurTech';

const Landing = (props: any) => {
	return (
		<main className={styles.mainContainer}>
			<Nav2 />
			<Header />
			<Offer />
			<Global />
			{/*
			<About />
			<Team />
			<Clients /> */}
			<Clients />
			<OurTech />
			<Footer />
		</main>
	);
};

export default Landing;
