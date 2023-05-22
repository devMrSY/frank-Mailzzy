const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;
const EmailRoute = require("./controller/Email");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/api", EmailRoute);

// app.use("/", (req, res) => res.send({ status: true }));

app.listen(port, () => console.log(`server is running on port ${port}`));
