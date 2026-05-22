import nodemailer from "nodemailer";

const sendEmail = async ({ to, text, subject }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to,
    text,
    subject,
  };
  return await transporter.sendMail(mailOptions);
};
export default sendEmail;
