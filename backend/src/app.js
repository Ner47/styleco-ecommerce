import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const message = {
    message: "E-commerce API",
  };
  res.json(message);
});

export default app;
