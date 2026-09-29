import pg, { Pool } from "pg";
import { env } from "./env.js";
import { logger } from "./logger.js";

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export const dbQuery = async (query, values = null) => {
  const client = await pool.connect();
  try {
    const res = await client.query(query, values);
    return res;
  } finally {
    client.release();
  }
};

export const connectDB = async () => {
  try {
    const res = await dbQuery("SELECT NOW();");
    logger.info("PostgreSQL connected");
    logger.info(`Database tome: ${res.rows[0].now}`);
  } catch (error) {
    logger.error(`PostgreSQL connection failed:\n${error.stack}`);
    process.exit(1);
  }
};
