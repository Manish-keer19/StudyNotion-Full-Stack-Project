import nodemailer from "nodemailer";

export const sendMail = async (email, title, body="") => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = body;

    const info = await transporter.sendMail({
      from: `"studyNotion" <${process.env.EMAIL_USER}>`, // sender address
      to: email, // list of receivers
      subject: title, // Subject line
      html: htmlContent, // html body
    });

    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
