import express from "express";
import { corsMiddleware } from "./config/cors.js";

const app = express();

app.use(corsMiddleware);
app.use(express.json());

app.get("/", (req, res) => {
  const message = {
    message: "E-commerce API",
  };
  res.json(message);
});

export default app;
