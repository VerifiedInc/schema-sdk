"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configData = void 0;
/*
 * File for default config values.
 * Can handle populating values via env vars at build time, i.e. PORT=9090 node build/server.js
 */
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// defaults to sandbox if not provided
const env = process.env.UNUM_ENV || process.env.NODE_ENV || 'sandbox';
const configData = {
    nodeEnv: env,
    debug: process.env.UNUM_DEBUG === 'true' || process.env.DEBUG === 'true' || false,
    logLevel: process.env.UNUM_LOG_LEVEL || process.env.LOG_LEVEL || 'info' // Winston defaults to info if not set however being explicit here
};
exports.configData = configData;
//# sourceMappingURL=config.js.map