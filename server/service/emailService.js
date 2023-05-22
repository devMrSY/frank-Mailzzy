const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "theodora.sauer40@ethereal.email",
    pass: "wmEYQfRMcxKJAeRBST",
  },
});

const sendEmail = async (from, to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });
    return {
      error: false,
      message: `Email sent to ${info.messageId}}`,
      responseData: info,
    };
  } catch (error) {
    return { error: true, message: error.message };
  }
};

// const intervalTime = 5000; // Interval time in milliseconds (e.g., 5000 = 5 seconds)

// const SendMailAsInterval = setInterval(() => {
//   //   if (recipients.length > 0) {
//   const recipient = "recipient.@example.com";
//   const subject = "Your email subject";
//   const message = "Your email message";

//   return sendEmail(recipient, subject, message);
//   //   } else {
//   //     clearInterval(interval);
//   //   }
// }, intervalTime);

module.exports = { sendEmail };
