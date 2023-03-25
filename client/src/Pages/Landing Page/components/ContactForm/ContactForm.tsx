import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';
import emailSend from '../../../../assets/images/contact_form/emailSend.svg';
import emailSent from '../../../../assets/images/contact_form/emailSent.svg';

export const ContactForm = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ showForm, setShowForm ] = useState(true);
	const [ showEmailSend, setEmailSend ] = useState(true);
	const [ showNameError, setShowNameError ] = useState(false);
	const [ showEmailError, setShowEmailError ] = useState(false);
	const [ showMessageError, setShowMessageError ] = useState(false);

	const PostData = (name: any, email: any, phone: any, message: any) => {
		fetch('http://localhost:8000/send', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				phone,
				message
			})
		})
			.then((res) => res.json())
			.then((data) => {
				setMessage('');
				setName('');
				setEmail('');
			})
			.catch((err) => {}); //fix this catch later
	};

	const handleValidation = () => {
		if (name === '') {
			setShowNameError(true);
		}
		if (email === '') {
			setShowEmailError(true);
		}
		if (message === '') {
			setShowMessageError(true);
		}
		if (name === '' || email === '' || message === '') {
			return false;
		}
		return true;
	};

	return (
		<div className={styles.mainContainer} id="contact">
			<div className={styles.contactBoard}>
				<div className={styles.formBoard}>
					{showForm === true ? (
						<form className={styles.innerForm}>
							<h2 className={styles.contactCTA}>Get in touch</h2>
							<p className={styles.greeting}>#FFA500 would love to hear from you!</p>
							<label>
								<span className={styles.textLabel}>FULL NAME</span>
								{showNameError === false ? (
									<span style={{ color: 'red', fontSize: '12.5px' }}>&#x2a;</span>
								) : (
									<span style={{ color: 'red', fontSize: '12.5px' }}> &#x2a;cannot be blank</span>
								)}
								<br />
								<input
									onChange={(e) => setName(e.target.value)}
									name="name"
									value={name}
									className={styles.inputBox}
									type="text"
								/>
							</label>
							<label>
								<span className={styles.textLabel}>EMAIL</span>
								{showEmailError === false ? (
									<span style={{ color: 'red', fontSize: '12.5px' }}>&#x2a;</span>
								) : (
									<span style={{ color: 'red', fontSize: '12.5px' }}> &#x2a;cannot be blank</span>
								)}
								<br />
								<input
									onChange={(e) => setEmail(e.target.value)}
									name="email"
									value={email}
									className={styles.inputBox}
									type="text"
								/>
							</label>
							<label>
								<span className={styles.textLabel}>PHONE NUMBER</span>
								<br />
								<input
									onChange={(e) => setPhone(e.target.value)}
									name="email"
									value={phone}
									className={styles.inputBox}
									type="text"
								/>
							</label>
							<label>
								<span className={styles.textLabel}>HOW CAN WE HELP?</span>

								{showMessageError === false ? (
									<span style={{ color: 'red', fontSize: '12.5px' }}>&#x2a;</span>
								) : (
									<span style={{ color: 'red', fontSize: '12.5px' }}> &#x2a;cannot be blank</span>
								)}
								<textarea
									onChange={(e) => {
										setMessage(e.target.value);
									}}
									className={styles.inputTextArea}
									name="message"
									value={message}
								/>
							</label>
							<input
								onClick={() => {
									if (handleValidation() === false) {
										return;
									} else {
										PostData(name, email, phone, message);
										setEmailSend(false);
										setShowForm(false);
										setName('');
										setEmail('');
										setPhone('');
										setMessage('');
									}
								}}
								className={styles.submitButton}
								type="button"
								value="Get in touch"
							/>
						</form>
					) : (
						<h2
							className={showEmailSend === false ? styles.fadeIn : null}
							style={{
								textAlign: 'center',
								fontSize: '62px',
								fontFamily: 'Junge'
							}}
						>
							Looking forward to hearing from you!
						</h2>
					)}
				</div>
				<div className={styles.rightBoard}>
					{showEmailSend === true ? (
						<div className={styles.imgContainer}>
							<img
								alt=""
								src={emailSend}
								style={{ height: '100%', width: '100%', alignSelf: 'center' }}
							/>
						</div>
					) : (
						<div className={styles.imgContainer}>
							<img
								alt=""
								src={emailSent}
								className={showEmailSend === false ? styles.fadeIn : null}
								style={{ height: '100%', width: '100%', alignSelf: 'center' }}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
