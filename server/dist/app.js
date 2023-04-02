"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
app.use(express_1.default.json());
app.use(cors({
    origin: "*",
}));
const port = 8000;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(express_1.default.static("/home/almorsbd/public_html/build"));
app.get("/contact", (req, res) => {
    res.sendFile("/home/almorsbd/public_html/build/index.html");
});
app.post("/send-email", (req, res) => {
    const { name, company, email, phone } = req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "gmoneydoespython@gmail.com",
            pass: "qbqjjywxcdtigbzu",
        },
    });
    const mailOptions = {
        from: email,
        to: "garonazarian09@gmail.com",
        subject: "Contact Form Submission",
        html: `
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
    `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send("Internal server error");
        }
        else {
            console.log(`Email sent: ${info.response}`);
            res.status(200).send("Email sent successfully");
            console.log(`Email sent: ${info.response.json}`);
            res.status(200).json({ message: "Email sent successfully" });
        }
    });
});
app.listen(port, () => {
    return console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=app.js.map