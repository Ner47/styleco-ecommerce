import express from "express";
import { corsMiddleware } from "./config/cors.js";
import { morganMiddleware } from "./config/morgan.js";

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(morganMiddleware);

app.get("/", (req, res) => {
  const message = {
    message: "E-commerce API",
  };
  res.json(message);
});

export default app;
