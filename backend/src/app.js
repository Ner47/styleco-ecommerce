import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "E-commerce API",
  });
});

export default app;
