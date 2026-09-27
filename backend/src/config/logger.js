import winston from "winston";
import { env } from "./env.js";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  return env.NODE_ENV === "development" ? "debug" : "info";
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

const developmentFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `[${info.timestamp}] [${info.level}]: ${info.message}`,
  ),
);

const productionFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json(),
);

const transports = [
  new winston.transports.Console({
    format:
      env.NODE_ENV === "production" ? productionFormat : developmentFormat,
  }),

  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
    format: productionFormat,
  }),

  new winston.transports.File({
    filename: "logs/combine.log",
    format: productionFormat,
  }),
];

export const logger = winston.createLogger({
  level: level(),
  levels,
  transports,
});
