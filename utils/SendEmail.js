import nodemailer from "nodemailer";

const sendEmail = async ({ to, html, subject }) => {
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
    html,
    subject,
  };
  return await transporter.sendMail(mailOptions);
};
export default sendEmail;
