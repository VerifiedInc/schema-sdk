"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const config_1 = require("./config");
// Only adding the timestamp if running locally. Otherwise the timestamp is little redundant when can be added in supplementary fashion outside of the message itself.
const consoleFormat = config_1.configData.nodeEnv === 'local'
    ? winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp({
        format: 'HH:mm.ss.SSS'
    }), winston_1.format.printf(info => {
        return `${info.timestamp} ${info.level}: ${info.message}`;
    }))
    : winston_1.format.combine(winston_1.format.printf(info => {
        return `${info.level}: ${info.message}`;
    }));
// Configure the Winston logger. For the complete documentation see https://github.com/winstonjs/winston
const logger = (0, winston_1.createLogger)({
    format: winston_1.format.combine(winston_1.format.splat(), winston_1.format.errors({ stack: true })),
    transports: [
        new winston_1.transports.Console({
            level: config_1.configData.logLevel || 'info',
            format: consoleFormat
        })
    ],
    silent: process.env.NODE_ENV === 'test'
});
// Printing this info here instead of in ./config to prevent a circular dependency.
logger.debug(`Schema SDK v0 Log Level: ${config_1.configData.logLevel}`);
logger.debug(`Schema SDK v0 Debug: ${config_1.configData.debug}`);
exports.default = logger;
//# sourceMappingURL=logger.js.map