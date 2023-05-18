const express = require("express");
const { sendEmail } = require("../service/emailService");

const Router = express();

Router.get("/sendEmail", (req, res) => {
  const response = sendEmail();
  res.json(response);
});

module.exports = Router;
