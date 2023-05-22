const express = require("express");
const { sendEmail } = require("../service/emailService");

const Router = express();

Router.post("/sendEmail", async (req, res) => {
  const { from, to, subject, text, html } = req.body;
  const response = await sendEmail(from, to, subject, text, html);
  res.json(response);
});

module.exports = Router;
