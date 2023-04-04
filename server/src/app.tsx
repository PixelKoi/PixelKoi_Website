import express from "express";

const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.static("/home/almorsbd/public_html/build"));

app.get("/*", (req, res) => {
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
    } else {
      console.log(`Email sent: ${info.response}`);
      res.status(200).send("Email sent successfully");
      console.log(`Email sent: ${info.response.json}`);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

app.post("/api/images", (req, res) => {
  // Read the current contents of the JSON file
  const contents = JSON.parse(fs.readFileSync("./imageHash.json", "utf8"));

  // Append the new image object to the array
  contents.images.push(req.body);

  // Write the updated JSON back to the file
  fs.writeFileSync("./imageHash.json", JSON.stringify(contents), "utf8");

  // Send a response to the client
  res.send("Image added to JSON file");
});

app.listen(port, () => {
  return console.log(`Server running on port ${port}`);
});
