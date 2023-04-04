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

app.use(express.static('/home/almorsbd/public_html/build'));

app.get('/contact', (req, res) => {
	res.sendFile('/home/almorsbd/public_html/build/index.html');
});
app.post('/send-email', (req, res) => {
	const { name, email, phone, budget, description } = req.body;

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
		to: 'jonathanbajada@pixelkoi.com',
		subject: 'Contact Form Submission',
		html: `
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Description:</strong> ${description}</p>
    `
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error(error);
			res.status(500).send('Internal server error');
		} else {
			console.log(`Email sent: ${info.response}`);
			res.status(200).send('Email sent successfully');
			console.log(`Email sent: ${info.response.json}`);
			res.status(200).json({ message: 'Email sent successfully' });
		}
	});
});

app.listen(port, () => {
	return console.log(`Server running on port ${port}`);
});
