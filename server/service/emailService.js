const nodemailer = require("nodemailer");

const tesrAccount = nodemailer.createTestAccount();

// connect with the smtp

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "loy14@ethereal.email",
    pass: "gkHG7r2EXAQjZGEB1d",
  },
});

const sendEmail = async (recipient, subject, message) => {
  try {
    const info = await transporter.sendMail({
      from: "your_actual_email_address",
      to: "franksooraj@gamil.com",
      subject: "Hello sooraj",
      text: "text body",
      html: "<h1>html comes here</h1>",
    });
    console.log(`Email sent to ${info.messageId}`);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};

const intervalTime = 5000; // Interval time in milliseconds (e.g., 5000 = 5 seconds)

const SendMailAsInterval = setInterval(() => {
  //   if (recipients.length > 0) {
  const recipient = "recipient.@example.com";
  const subject = "Your email subject";
  const message = "Your email message";

  return sendEmail(recipient, subject, message);
  //   } else {
  //     clearInterval(interval);
  //   }
}, intervalTime);

module.exports = { SendMailAsInterval, sendEmail };
