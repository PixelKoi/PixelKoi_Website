import Header from './components/Header/Header';
import Clients from '../Landing Page/components/Clients/Clients';
import '../../styles/globalStyles.css';
import styles from './Landing.module.css';

import Nav from '../../components/Nav/Nav';
import Offer from './components/Offer/Offer';
import Global from './components/Global/Global';
import OurTech from './components/OurTech/OurTech';
import Footer2 from '../../components/Footer/Footer2';

const Landing = (props: any) => {
	return (
		<main className={styles.mainContainer}>
			<Nav />
			<Header />
			<Offer />
			<Global />
			{/*
			<About />
			<Team />
			<Clients /> */}
			<Clients />
			<OurTech />
			<Footer2 />
		</main>
	);
};

export default Landing;
