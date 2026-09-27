import pg, { Pool } from "pg";
import { env } from "./env.js";
import { logger } from "./logger.js";

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export const connectDB = async () => {
  try {
    const client = await pool.connect();
    logger.info("PostgreSQL connected");
    const res = await client.query("SELECT NOW();");
    logger.info(res.rows[0].now);
    client.release();
  } catch (error) {
    logger.error("PostgreSQL connection failed: " + error);
    process.exit(1);
  }
};
