"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ajv = void 0;
const ajv_1 = __importDefault(require("ajv"));
const logger_1 = __importDefault(require("./logger"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const jsonSchemas_1 = require("./jsonSchemas");
// get all the values of the jsonSchemas object in an array
// schemas to add to ajv instance options
const schemas = Object.values(jsonSchemas_1.jsonSchemas);
/**
 * Passing all schemas to Ajv constructor, which internally calls addScehma, instead of adding them on demand
 * Options ref: https://ajv.js.org/options.html#ajv-options
 *
 * Note: Although addSchema does not compile schemas, explicit compilation is not required - the schema will be compiled when it is used first time.
 * ref: https://ajv.js.org/api.html#ajv-addschema-schema-object-object-key-string-ajv
*/
exports.ajv = new ajv_1.default({
    allErrors: true,
    coerceTypes: true,
    logger: // ref: https://ajv.js.org/guide/modifying-data.html#coercing-data-types
    logger_1.default,
    schemas
});
// Adding formats to ajv
(0, ajv_formats_1.default)(exports.ajv);
/*******************************************************************
 * Add custom formats to ajv below                                 *
 * ref: https://ajv.js.org/guide/formats.html#user-defined-formats *
 *******************************************************************/
exports.ajv.addFormat('ssn', {
    type: 'string',
    validate: (ssn) => {
        const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
        return ssnRegex.test(ssn);
    }
});
exports.ajv.addFormat('email', {
    type: 'string',
    validate: (email) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/; // source: https://www.w3resource.com/javascript/form/email-validation.php#
        return emailRegex.test(email);
    }
});
exports.ajv.addFormat('phone', {
    type: 'string',
    validate: (phone) => {
        const phoneRegex = /^\+(?:[0-9]●?){6,14}[0-9]$/;
        return phoneRegex.test(phone);
    }
});
//# sourceMappingURL=ajv.js.map