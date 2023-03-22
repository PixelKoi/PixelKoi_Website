import express from 'express';

const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

app.use(express.json());

app.use(
	cors({
		origin: '*'
	})
);

const port = 8000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.post('/send-email', (req, res) => {
	const { name, company, email, phone } = req.body;

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: 'gmoneydoespython@gmail.com',
			pass: 'qbqjjywxcdtigbzu'
		}
	});

	const mailOptions = {
		from: email,
		to: 'garonazarian09@gmail.com',
		subject: 'Contact Form Submission',
		html: `
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
    `
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error(error);
			res.status(500).send('Internal server error');
		} else {
<<<<<<< HEAD
			console.log(`Email sent: ${info.response}`);
			res.status(200).send('Email sent successfully');
=======
			console.log(`Email sent: ${info.response.json}`);
			res.status(200).json({message: "Email sent successfully"});
>>>>>>> 2b0f71e7e7edac65a7355b6442ae4d13160d8c6d
		}
	});
});

app.listen(port, () => {
	return console.log(`Server running on port ${port}`);
});
