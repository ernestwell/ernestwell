// const express = require("express");
// const multer = require("multer");
// const cors = require("cors");
// const fs = require("fs");
// const path = require("path");
// const nodemailer = require("nodemailer");

// const app = express();
// const PORT = 5000;

// // Ensure uploads folder exists
// const uploadDir = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Multer storage for career form (resumes & cover letters)
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + file.originalname;
//     cb(null, uniqueSuffix);
//   },
// });

// // File filter for PDFs and DOCX
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "application/pdf" || file.mimetype.includes("word")) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only PDF and Word documents are allowed!"), false);
//   }
// };

// // Multer upload configuration
// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file limit
// }).fields([
//   { name: "resume", maxCount: 1 },
//   { name: "coverLetter", maxCount: 1 },
// ]);

// // Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "ernestwellbusiness@gmail.com", // 🔴 Replace with your email
//     pass: "dsjk jcmj naxt yjfx", // 🔴 Use your App Password (if using Gmail)
//   },
// });

// // ✅ Career Form API (Handles Resume & Cover Letter)
// app.post("/send", (req, res) => {
//   upload(req, res, (err) => {
//     if (err instanceof multer.MulterError) {
//       return res.status(400).json({ success: false, message: "Multer error: " + err.message });
//     } else if (err) {
//       return res.status(400).json({ success: false, message: "File upload error: " + err.message });
//     }

//     // Log uploaded files
//     console.log("Files uploaded:", req.files);

//     // Get form details
//     const { name, email, message } = req.body;
//     const resumePath = req.files["resume"] ? req.files["resume"][0].path : null;
//     const coverLetterPath = req.files["coverLetter"] ? req.files["coverLetter"][0].path : null;

//     // Email options
//     const mailOptions = {
//       from: "ernestwellbusiness@gmail.com", // 🔴 Replace with your email
//       to: "ernestwellbusiness@gmail.com", // 🔴 Replace with recipient email
//       subject: `New Job Application from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//       attachments: [
//         ...(resumePath ? [{ filename: "Resume.pdf", path: resumePath }] : []),
//         ...(coverLetterPath ? [{ filename: "CoverLetter.pdf", path: coverLetterPath }] : []),
//       ],
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error("Email error:", error);
//         return res.status(500).json({ success: false, message: "Email sending failed!" });
//       }
//       console.log("Career email sent:", info.response);
//       res.status(200).json({ success: true, message: "Application submitted & email sent!" });
//     });
//   });
// });

// // ✅ Contact Form API (Handles Name, Email, and Message)
// app.post("/contact", async (req, res) => {
//   const { name, email, message } = req.body;

//   // Email options
//   const mailOptions = {
//     from: "ernestwellbusiness@gmail.com", // 🔴 Replace with your email
//     to: "ernestwellbusiness@gmail.com", // 🔴 Replace with recipient email
//     subject: `New Contact Form Message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   // Send email
//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Contact email sent:", info.response);
//     res.status(200).json({ success: true, message: "Message sent successfully!" });
//   } catch (error) {
//     console.error("Contact email error:", error);
//     res.status(500).json({ success: false, message: "Email sending failed!" });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
//   console.log("✅ Uploads folder:", uploadDir);
// });
import express from "express";
import multer from "multer";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer Memory Storage (Since Vercel doesn't support filesystem writes)
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file limit
}).fields([
  { name: "resume", maxCount: 1 },
  { name: "coverLetter", maxCount: 1 },
]);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use App Password if using Gmail
  },
});

// ✅ Career Form API (Handles Resume & Cover Letter)
app.post("/api/send", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: "File upload error: " + err.message });
    }

    // Extract form data
    const { name, email, message } = req.body;
    const resume = req.files["resume"] ? req.files["resume"][0] : null;
    const coverLetter = req.files["coverLetter"] ? req.files["coverLetter"][0] : null;

    // Prepare email attachments
    const attachments = [];
    if (resume) attachments.push({ filename: resume.originalname, content: resume.buffer });
    if (coverLetter) attachments.push({ filename: coverLetter.originalname, content: coverLetter.buffer });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Job Application from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      attachments: attachments,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email error:", error);
        return res.status(500).json({ success: false, message: "Email sending failed!" });
      }
      console.log("Career email sent:", info.response);
      res.status(200).json({ success: true, message: "Application submitted & email sent!" });
    });
  });
});

// ✅ Contact Form API (Handles Name, Email, and Message)
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `New Contact Form Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Contact email sent:", info.response);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact email error:", error);
    res.status(500).json({ success: false, message: "Email sending failed!" });
  }
});

// Export as Vercel Serverless Function
export default app;
