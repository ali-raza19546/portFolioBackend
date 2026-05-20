import nodemailer from "nodemailer";

const sendEmail = async ({ to, text, subject }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tanzeelkhan3455@gmail.com",
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: "tanzeelkhan3455@gmail.com",
    to,
    text,
    subject,
  };
  return await transporter.sendMail(mailOptions);
};
export default sendEmail;
