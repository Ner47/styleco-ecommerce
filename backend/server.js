const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send({
    "message": "E-commerce API",
  });
});

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});
