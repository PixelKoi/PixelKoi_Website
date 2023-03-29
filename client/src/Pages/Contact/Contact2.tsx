import React, { useState, useEffect, useRef, CSSProperties } from 'react';
import Nav from '../../components/Nav/Nav';
import styles from './Contact2.module.scss';
import Footer from '../../components/Footer/ContactPage/FooterContactPage';
import { motion, useScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

import Select, { StylesConfig } from 'react-select';
import mailboxImg from '../../assets/Home/mailbox.jpg';
import ParticleBackground from '../../components/Particles/ParticlesBackground';
const deadlineOptions = [
	{ value: '1 Month', label: '1 Month' },
	{ value: '3 Month', label: '3 Month' },
	{ value: '6 Month', label: '6 Month' },
	{ value: '1 Year', label: '1 Year' }
];

const costOptions = [
	{ value: '$20,000', label: '$20,000' },
	{ value: '$40,000', label: '$40,000' },
	{ value: '$60,000', label: '$60,000' },
	{ value: 'infinite', label: 'infinite' }
];

// TODO: Add email and name checks / make sure the information is filled out.
// TODO: Add Submission check, display and Animate,
// TODO: Add functionality for
const customStyles = {
	control: (baseStyles: any, state: any) => ({
		...baseStyles,
		backgroundColor: 'transparent',
		borderColor: state.isFocused ? '#fff' : '#595959',
		height: '60px',
		boxShadow: 'none',
		'&:hover': {
			boxShadow: '#fff'
		}
	}),
	option: (styles: any, state: any) => {
		return {
			...styles
			// borderColor: state.isSelected ? '#fff' : '#595959'
		};
	},
	singleValue: (base: any) => ({ ...base, color: '#fff' }),
	menu: (base: any) => ({
		...base,
		// override border radius to match the box
		backgroundColor: '#fff',
		// kill the gap
		marginTop: 0
	}),
	menuList: (base: any) => ({
		...base,
		// kill the white space on first and last option
		padding: 0,
		color: '#595959'
	})
};

interface FormData {
	name: string;
	company: string;
	email: string;
	phone: string;
	deadline: number;
	budget: number;
}

interface SimpleForm {
	name: string;
	email: string;
	message: string;
}

export const Contact = () => {
	const ref = useRef<HTMLImageElement>(null);

	useEffect(() => {
		function handleScroll() {
			if (ref.current) {
				const { top, height } = ref.current.getBoundingClientRect();
				const percentVisible = (window.innerHeight - top) / height;
				const translateY = (1 - percentVisible) * -20;
				ref.current.style.transform = `translateY(${translateY}%)`;
			}
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const { scrollYProgress } = useScroll();
	const [ hookedYPostion, setHookedYPosition ] = React.useState(0);
	//smooth transition for scrolling through divs on landing page
	const location = useLocation();

	useEffect(
		() => {
			// hook into the onChange, store the current value as state.
			scrollYProgress.onChange((v) => setHookedYPosition(v));
		},
		[ scrollYProgress ]
	); //make sure to re-subscriobe when scrollYProgress changes
	const [ deadline, setDeadline ] = useState(1);
	const [ amount, setAmount ] = useState(20);

	const [ values, setValues ] = useState<FormData>({
		name: '',
		company: '',
		email: '',
		phone: '',
		deadline: deadline,
		budget: amount
	});

	const [ simpleValues, setSimpleValues ] = useState<SimpleForm>({
		name: '',
		email: '',
		message: ''
	});

	//Show form
	const [ show, setForm ] = useState('');
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		fetch('http://localhost:8000/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(values)
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.then(() => setForm('submitted'))
			.catch((error) => {
				console.error("We've run into an error: ", error);
				setForm('error');
			});
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		values.budget = amount;
		values.deadline = deadline;
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
		console.log(values);
	};

	const handleInputChangeSimple = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setSimpleValues({ ...simpleValues, [name]: value });
		console.log(simpleValues);
	};
	const item = { hidden: { scale: 1, opacity: 1, tansition: { duration: 1, ease: 'easeIn' } } };

	return (
		<div>
			<Nav />
			<div className={styles.headerWrapper}>
				<div className={styles.header}>
					<motion.h1
						className={styles.headerText}
						initial={{ opacity: 0, y: 80 }}
						animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.4 } }}
					>
						Get In Touch
					</motion.h1>
					<motion.div
						initial={{ opacity: 0, y: 80 }}
						animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.4 } }}
						className={styles.links}
					>
						<Link to="/">Home</Link>
						<Link to="/#services">Services</Link>
					</motion.div>
					<motion.div
						initial={{ scale: 1.2 }}
						animate={{ scale: 1, transition: { ease: 'easeIn', duration: 0.4 } }}
						className={styles.backgroundText}
					>
						CONTACTS
					</motion.div>
				</div>
			</div>

			<motion.div className={styles.formSection}>
				<motion.div
					variants={item}
					// initial={{ scale: 0, opacity: 0 }}
					// animate={hookedYPostion > 0 ? 'hidden' : 'show'}
					className={styles.wrapper}
				>
					<motion.div className={styles.contact}>
						<div className={styles.intro}>
							<strong>
								<em />
							</strong>
							<strong>
								<em />
							</strong>
							<h2>Let's Work Together</h2>
							<div className={styles.divider} />
							<div>
								Certe, inquam, pertinax non emolumento aliquo, sed quia dolor sit, aspernatur aut
								fugiat. Ut placet, inquam tum dicere exorsus est primum.
							</div>
						</div>
						<motion.form className={styles.form}>
							<input
								type="text"
								className={`${styles.input} `}
								maxLength={256}
								name="Contact-v2-Name"
								data-name="Contact v2 Name"
								placeholder="Your name"
							/>
							<input
								type="email"
								className={styles.input}
								maxLength={256}
								name="Contact-v2-Email"
								data-name="Contact v2 Email"
								placeholder="Email address"
							/>
							<input
								type="tel"
								className={styles.input}
								maxLength={256}
								name="Contact-v2-Phone"
								data-name="Contact v2 Phone"
								placeholder="Contact Phone"
							/>
							<input
								type="text"
								className={styles.input}
								maxLength={256}
								name="Contact-v2-Budget"
								data-name="Contact v2 Budget"
								placeholder="Budget"
							/>
							<textarea
								name="Contact-v2-Info"
								placeholder="Describe your project..."
								maxLength={5000}
								data-name="Contact v2 Info"
								className={`${styles.input2} ${styles.textArea} `}
							/>
							<input
								type="submit"
								value="Submit Message"
								data-wait="Please wait..."
								className={styles.button}
							/>
						</motion.form>
					</motion.div>
				</motion.div>
				<motion.div ref={ref} style={{ willChange: 'transform' }} className={styles.contact2}>
					<img className={styles.bgIMG} src={mailboxImg} alt="" />
				</motion.div>
			</motion.div>
			<Footer />
		</div>
	);
};
