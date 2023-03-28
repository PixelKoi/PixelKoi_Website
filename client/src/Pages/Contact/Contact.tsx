import React, { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import styles from './Contact.module.scss';
import Footer from '../../components/Footer/ContactPage/Footer3';
import { motion } from 'framer-motion';

import Select, { StylesConfig } from 'react-select';
import mailboxImg from '../../assets/Home/mailbox.jpg';

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
	const startForm = () => {
		return (
			<motion.form
				initial={{ y: 5, opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					transition: { duration: 0.8, ease: 'easeIn' }
				}}
				className={styles.formSection}
				onSubmit={handleSubmit}
			>
				<div className={styles.formContainer}>
					<label className={styles.formLabel}>My name is</label>
					<input
						value={values.name}
						onChange={handleInputChange}
						className={styles.formInput}
						type="text"
						name="name"
						placeholder="Name Surname"
						required
					/>

					<label className={styles.formLabel}>I work for</label>
					<input
						value={values.company}
						onChange={handleInputChange}
						className={styles.formInput}
						type="text"
						name="company"
						placeholder="Company name"
						required
					/>

					<label className={styles.formLabel}>Write me at</label>
					<input
						value={values.email}
						onChange={handleInputChange}
						className={styles.formInput}
						type="text"
						name="email"
						placeholder="my email address"
						required
					/>

					<label className={styles.formLabel}>Call me at</label>
					<input
						value={values.phone}
						onChange={handleInputChange}
						className={styles.formInput}
						type="text"
						name="phone"
						placeholder="my phone number"
						required
					/>
				</div>

				<div className={styles.sliderContainer} style={{ marginTop: '4rem' }}>
					<label className={styles.formLabel}>Deadline</label>
					<div className={styles.deadlineWrapper}>
						<div className={styles.unitContainer} onClick={() => setDeadline(1)}>
							<div>
								<span>1 Month</span>
							</div>
							{deadline === 1 ? <div className={styles.circle} /> : null}
						</div>

						<div
							className={styles.unitContainer}
							style={{ marginLeft: 'auto' }}
							onClick={() => setDeadline(3)}
						>
							<div>
								<span>3 Months</span>
							</div>
							{deadline === 3 ? <div className={styles.circle} style={{ alignSelf: 'center' }} /> : null}
						</div>
						<div
							className={styles.unitContainer}
							style={{ marginLeft: 'auto' }}
							onClick={() => setDeadline(6)}
						>
							<div>
								<span>6 Months</span>
							</div>
							{deadline === 6 ? <div className={styles.circle} style={{ alignSelf: 'center' }} /> : null}
						</div>
						<div
							className={styles.unitContainer}
							style={{ marginLeft: 'auto' }}
							onClick={() => setDeadline(12)}
						>
							<div>
								<span>1 Year</span>
							</div>
							{deadline === 12 ? <div className={styles.circle} style={{ marginLeft: '2rem' }} /> : null}
						</div>
					</div>
				</div>

				<div className={styles.sliderContainer} style={{ marginTop: '2rem' }}>
					<label className={styles.formLabel}>Budget</label>
					<div className={styles.deadlineWrapper} data-name="deadline" data-value={values.deadline}>
						<div className={styles.unitContainer} onClick={() => setAmount(20)}>
							<div>
								<span>20,000</span>
							</div>
							{amount === 20 ? <div className={styles.circle} /> : null}
						</div>

						<div
							className={styles.unitContainer}
							style={{ marginLeft: 'auto' }}
							onClick={() => setAmount(40)}
						>
							<div>
								<span>40,000</span>
							</div>
							{amount === 40 ? <div className={styles.circle} style={{ alignSelf: 'center' }} /> : null}
						</div>
						<div
							className={styles.unitContainer}
							style={{ marginLeft: 'auto' }}
							onClick={() => setAmount(60)}
						>
							<div>
								<span>60,0000</span>
							</div>
							{amount === 60 ? <div className={styles.circle} style={{ alignSelf: 'center' }} /> : null}
						</div>
						<div
							className={styles.unitContainer}
							style={{ marginLeft: 'auto' }}
							onClick={() => setAmount(12)}
						>
							<div>
								<span>No Limit</span>
							</div>
							{amount === 12 ? <div className={styles.circle} style={{ marginLeft: '3.5rem' }} /> : null}
						</div>
					</div>
				</div>
				<div className={styles.selectorContainer}>
					<label className={styles.formLabel}>Deadline</label>
					<Select options={deadlineOptions} defaultValue={deadlineOptions[0]} styles={customStyles} />
					<label className={styles.formLabel} style={{ marginTop: '2rem' }}>
						Budget
					</label>
					<Select options={costOptions} defaultValue={costOptions[0]} styles={customStyles} />
				</div>
				<div className={`${styles.buttonGroup} ${styles.sendButton}`}>
					<li className={styles.buttonLink}>
						<button
							type="submit"
							// onClick={() => {
							// 	setForm('submitted');
							// }}
							className={styles.navLink}
						>
							<span className={styles.buttonText}>SEND</span>
						</button>
					</li>
				</div>
			</motion.form>
		);
	};

	const hiForm = () => {
		return (
			<motion.form
				className={styles.formSection}
				initial={{ y: 5, opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					transition: { duration: 0.8, ease: 'easeIn' }
				}}
				onSubmit={handleSubmit}
			>
				<div className={styles.formContainer}>
					<label className={styles.formLabel}>My name is</label>
					<input
						className={styles.formInput}
						type="text"
						name="name"
						onChange={handleInputChangeSimple}
						placeholder="Name Surname"
						value={simpleValues.name}
						required
					/>

					<label className={styles.formLabel}>Write me at</label>
					<input
						className={styles.formInput}
						type="text"
						name="email"
						onChange={handleInputChangeSimple}
						placeholder="my email address"
						value={simpleValues.email}
						required
					/>

					<label className={styles.formLabel}>Dear Pixel Koi,</label>
					<input
						className={styles.formInput}
						type="text"
						name="message"
						onChange={handleInputChangeSimple}
						placeholder="I wanna say hi.."
						value={simpleValues.message}
						required
					/>
				</div>
				<div className={`${styles.buttonGroup} ${styles.sendButton}`}>
					<li className={styles.buttonLink}>
						<button type="submit" className={styles.navLink}>
							<span className={styles.buttonText}>SEND</span>
						</button>
					</li>
				</div>
			</motion.form>
		);
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

	//Show Contact form based on state
	const showForm = (form: String) => {
		switch (form) {
			case 'hi':
				return hiForm();
			case 'submitted':
				return submittedForm();
			case 'error':
				return errorForm();
			default:
				return startForm();
		}
	};
	const item = { show: { x: 0, opacity: 0, transition: { duration: 0.5 } } };
	return (
		<div>
			<Nav />
			<div className={styles.container} style={{ backgroundImage: `url(${mailboxImg})` }}>
				<div className={styles.innerContainer}>
					<div className={styles.topFormContainer}>
						<div className={styles.sectionHeader}>
							<div className={styles.pageHeader}>
								<motion.h3
									initial={{ x: 30, opacity: 0 }}
									animate={{
										x: 0,
										opacity: 1,
										transition: { duration: 0.8, ease: 'easeIn' }
									}}
									id="header-caption"
								>
									GET IN TOUCH
								</motion.h3>
								<motion.h1
									style={{ fontSize: '30px' }}
									initial={{ x: -30, opacity: 0 }}
									animate={{
										x: 0,
										opacity: 1,
										transition: { duration: 0.8, ease: 'easeIn' }
									}}
								>
									Let's Create Something
								</motion.h1>
								<motion.h1
									style={{ fontSize: '30px' }}
									initial={{ x: 30, opacity: 0 }}
									animate={{
										x: 0,
										opacity: 1,
										transition: { duration: 0.8, ease: 'easeIn' }
									}}
								>
									Great Together
								</motion.h1>
							</div>
						</div>
						<motion.div
							initial={{ y: 5, opacity: 0 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: { duration: 0.8, ease: 'easeIn' }
							}}
							className={styles.formSelection}
						>
							<ul className={styles.buttonGroup}>
								<li className={styles.buttonLink}>
									<a onClick={() => setForm('start')} className={styles.navLink}>
										<span className={styles.buttonText}>Start A Project</span>
									</a>
								</li>
								<li className={styles.buttonLink}>
									<a onClick={() => setForm('hi')} className={styles.navLink}>
										<span className={styles.buttonText}>Say Hello!</span>
									</a>
								</li>
							</ul>
						</motion.div>
					</div>
				</div>
				{showForm(show)}
			</div>
			<Footer />
		</div>
	);
};
