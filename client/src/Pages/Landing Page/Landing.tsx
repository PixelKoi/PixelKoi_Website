import Header from './components/Header/Header';
import Team from '../Landing Page/components/Team/Team';
import Clients from '../Landing Page/components/Clients/Clients';
import '../../styles/globalStyles.css';
import styles from './Landing.module.css';
import Footer from '../../components/Footer/Footer';
import Nav2 from '../../components/Nav/Nav2';

const Landing = (props: any) => {
	return (
		<main className={styles.mainContainer}>
			<Nav2 />
			<Header />
			{/* <Offer />
			<About />
			<Team />
			<Clients /> */}
			<Footer />
		</main>
	);
};

export default Landing;
