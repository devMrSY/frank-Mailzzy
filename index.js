const express = require("express");

const app = express();
const port = 4000;
const EmailRoute = require("./controller/Email");

app.use("/api", EmailRoute);

// app.use("/", (req, res) => res.send({ status: true }));

app.listen(port, () => console.log(`server is running on port ${port}`));
