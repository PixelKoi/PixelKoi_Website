import React, { useState, useEffect, useRef, CSSProperties } from 'react';
import Nav from '../../components/Nav/Nav';
import styles from './Contact2.module.scss';
import Footer from '../../components/Footer/ContactPage/FooterContactPage';
import { motion, useScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { AiFillWarning } from 'react-icons/ai';

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
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ warningEmail, setWarningEmail ] = useState(false);
	const [ phone, setPhone ] = useState('');
	const [ budget, setBudget ] = useState(0);
	const [ description, setDescription ] = useState('0');

	const [ complete, setComplete ] = useState(false);
	const [ error, setError ] = useState(false);

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
			.then(() => {
				setForm('submitted');
				setComplete(true);
			})
			.catch((error) => {
				console.error("We've run into an error: ", error);
				setForm('error');
				setError(true);
			});
	};

	//Show Contact form based on state
	const showForm = (form: String) => {
		switch (form) {
			case 'complete':
				return (
					<div className={styles.formSucess}>
						<div>Thank you! Your submission has been received!</div>
					</div>
				);
			case 'error':
				return (
					<div className={styles.formError}>
						<div>Oops! Something went wrong while submitting the form.</div>
					</div>
				);
			default:
				return null;
		}
	};

	const submittedForm = () => {
		return (
			<div className={styles.formSection}>
				<p style={{ color: 'white', textAlign: 'center', padding: '10rem' }}>
					Thank you for submitting your proposal to us. We appreciate your interest in our company and the
					opportunity to review your ideas. We will carefully evaluate your submission and get back to you as
					soon as possible.
				</p>
			</div>
		);
	};

	const errorForm = () => {
		return (
			<div className={styles.formSection}>
				<p style={{ color: 'white', textAlign: 'center', padding: '10rem' }}>
					We're sorry, but there was an error submitting your proposal. Please try again later or contact our
					support team for assistance. Thank you for your patience and understanding.
				</p>
			</div>
		);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		values.budget = amount;
		values.deadline = deadline;
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
		console.log(values);
	};

	const handleInputChangeArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
	const item = {
		hidden: {
			scale: 1,
			opacity: 1,
			tansition: { duration: 1, ease: 'easeIn' }
		}
	};

	return (
		<div>
			<Nav />
			<div className={styles.headerWrapper}>
				<div className={styles.header}>
					<motion.h1
						className={styles.headerText}
						initial={{ opacity: 0, y: 80 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.4, duration: 0.4 }
						}}
					>
						Get In Touch
					</motion.h1>
					<motion.div
						initial={{ opacity: 0, y: 80 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.4, duration: 0.4 }
						}}
						className={styles.links}
					>
						<Link to="/">Home</Link>
						<Link to="/#services">Services</Link>
					</motion.div>
					<motion.div
						initial={{ scale: 1.2 }}
						animate={{
							scale: 1,
							transition: { ease: 'easeIn', duration: 0.4 }
						}}
						className={styles.backgroundText}
					>
						CONTACTS
					</motion.div>
				</div>
			</div>

			<motion.div className={styles.formSection}>
				<motion.div variants={item} className={styles.wrapper}>
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
								Send us a message today to start transforming your ideas into innovative software
								solutions.
							</div>
						</div>
						<motion.form className={styles.form} onSubmit={handleSubmit}>
							<input
								type="text"
								className={styles.input}
								maxLength={256}
								name="Contact-v2-Name"
								data-name="Contact v2 Name"
								placeholder="Your name"
								value={name}
								onChange={() => setName(name)}
							/>
							<div className={styles.emailGroup}>
								<input
									type="email"
									className={styles.input}
									maxLength={256}
									name="Contact-v2-Email"
									data-name="Contact v2 Email"
									placeholder="Email address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									onBlur={() => {
										if (email.length === 0) {
											setWarningEmail(false);
										} else if (email.length > 0 && !email.includes('@')) {
											setWarningEmail(true);
										} else if (email.length > 0 && email.includes('@')) {
											setWarningEmail(false);
										}
									}}
								/>
								<div
									className={styles.checkEmail}
									style={{ display: warningEmail === false ? 'none' : 'block' }}
								>
									<div className={styles.innerCheckEmail}>
										<AiFillWarning className={styles.warningIcon} />
										<p className={styles.emailWarningText}>
											Please include '@' in your email address!
										</p>
									</div>
								</div>
							</div>
							<input
								type="tel"
								className={styles.input}
								maxLength={256}
								name="Contact-v2-Phone"
								data-name="Contact v2 Phone"
								placeholder="Contact Phone"
								onChange={handleInputChange}
							/>
							<input
								type="text"
								className={styles.input}
								maxLength={256}
								name="Contact-v2-Budget"
								data-name="Contact v2 Budget"
								placeholder="Budget"
								onChange={handleInputChange}
							/>
							<textarea
								name="Contact-v2-Info"
								placeholder="Describe your project..."
								maxLength={5000}
								data-name="Contact v2 Info"
								className={`${styles.input2} ${styles.textArea} `}
								onChange={handleInputChangeArea}
							/>
							<input
								type="submit"
								onClick={() => {}}
								value="Submit Message"
								data-wait="Please wait..."
								className={styles.button}
							/>
						</motion.form>
						{complete === true ? (
							<div className={styles.formSucess}>
								<div>Thank you! Your submission has been received!</div>
							</div>
						) : null}
						{error === true ? (
							<div className={styles.formError}>
								<div>Oops! Something went wrong while submitting the form.</div>
							</div>
						) : null}
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
