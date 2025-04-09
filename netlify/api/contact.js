const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const handler = async(event) => {
  const { name, email, message } = JSON.parse(event.body).payload.data;
  console.log(`name: ${name}, email: ${email}, message: ${message}`);

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "yahoo",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      message: "Failed to send email",
      error: error.toString(),
    });
  }
};

module.exports = { handler };
