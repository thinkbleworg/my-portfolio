
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health-check route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// IMPORTANT: Define your API route exactly as expected.
app.post("/contact", async (req, res) => {
    if (req.method !== "POST") {
        res.status(405).json({ message: "Method Not Allowed" });
      }
    
      console.log("EMAIL_USER:", process.env.EMAIL_USER);
      console.log("RECEIVER_EMAIL:", process.env.RECEIVER_EMAIL);
    
      const { name, email, message } = req.body;
    
      if (!name || !email || !message) {
        res.status(400).json({ message: "All fields are required" });
      }
    
      try {
        const transporter = nodemailer.createTransport({
          service: "yahoo",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
          // Set a connection timeout (in milliseconds)
          connectionTimeout: 5000,
          // Optionally set a greeting timeout
          greetingTimeout: 5000,
        });
    
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.RECEIVER_EMAIL,
          subject: `New Contact Form Submission from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };
    
        console.log("Receiver Email:", process.env.RECEIVER_EMAIL);
        console.log("mailOptions", mailOptions);
    
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
      } catch (error) {
        console.error("Error sending email:", error);
        res
          .status(500)
          .json({ message: "Failed to send email", error: error.toString() });
      }
});

export default app;