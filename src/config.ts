/*
 * File for default config values.
 * Can handle populating values via env vars at build time, i.e. PORT=9090 node build/server.js
 */
import dotenv from 'dotenv';

dotenv.config();

// defaults to sandbox if not provided
const env = process.env.UNUM_ENV || process.env.NODE_ENV || 'sandbox';

const configData = {
  nodeEnv: env,
  debug: process.env.UNUM_DEBUG === 'true' || process.env.DEBUG === 'true' || false,
  logLevel: process.env.UNUM_LOG_LEVEL || process.env.LOG_LEVEL || 'info' // Winston defaults to info if not set however being explicit here
};

export { configData };
