"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const hashJson = path_1.default.join(__dirname, "./../imageHash.json");
// const hashObjects = { url: "src", blurHash: "blurhash code here" };
// if (fs.existsSync(filePath)) {
//   // Read the file contents
//   const jsonData = fs.readFileSync(filePath);
//   const data = JSON.parse(jsonData);
// } else {
//   // Create a new file with the initial data
//   const data = { images: [hashObjects] };
//   fs.writeFileSync(filePath, JSON.stringify(data));
// }
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
}));
const port = 8000;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(express_1.default.static(path_1.default.join(__dirname, "build")));
app.post("/api/images", (req, res) => {
    const { images } = req.body;
    console.log("image type:", typeof images);
    console.log("Images: ", images);
    console.log(images);
    try {
        const jsonData = fs_1.default.readFileSync(hashJson);
        let json = JSON.parse(jsonData.toString());
        if (Array.isArray(json)) {
            json.push(images);
        }
        else {
            json = [images];
        }
        fs_1.default.writeFileSync(hashJson, JSON.stringify(json));
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ message: "Internal Server Error" });
    }
});
app.get("/api/images", (req, res) => {
    try {
        const jsonData = fs_1.default.readFileSync(hashJson);
        res.send(jsonData);
    }
    catch (e) {
        console.log(e);
    }
});
//production USE
// app.use(express.static("/home/almorsbd/public_html/build"));
// PRODUCTION USE
app.get("/about", (req, res) => {
    res.sendFile("/home/almorsbd/public_html/build/index.html");
});
app.post("/send-email", (req, res) => {
    const { name, company, email, phone } = req.body;
    const transporter = nodemailer_1.default.createTransport({
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
// Append new hashObject to imageHash
app.listen(port, () => {
    return console.log(`Server running on port ${port}`);
});
//# sourceMappingURL=app.js.map