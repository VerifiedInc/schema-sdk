"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ajv = void 0;
// Using Ajv 2019 Draft for access to new features like $data, $merge, unevaluatedProperties, etc.
// 100% backwards compatible with Ajv 6
const _2019_1 = __importDefault(require("ajv/dist/2019"));
const logger_1 = __importDefault(require("./logger"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const jsonSchemas_1 = require("./jsonSchemas");
const formats_1 = require("./formats");
const fs_1 = __importDefault(require("fs"));
const schemas_1 = require("./schemas");
// get all the values of the jsonSchemas object in an array
// schemas to add to ajv instance options
const schemas = Object.values(jsonSchemas_1.jsonSchemas);
/**
 * Passing all schemas to Ajv constructor, which internally calls addSchema, instead of adding them on demand
 * Options ref: https://ajv.js.org/options.html#ajv-options
 *
 * Note: Although addSchema does not compile schemas, explicit compilation is not required - the schema will be compiled when it is used first time.
 * ref: https://ajv.js.org/api.html#ajv-addschema-schema-object-object-key-string-ajv
 */
exports.ajv = new _2019_1.default({
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
exports.ajv.addFormat('email', formats_1.emailFormat);
exports.ajv.addFormat('optionalEmail', formats_1.optionalEmailFormat);
exports.ajv.addFormat('phone', formats_1.phoneFormat);
exports.ajv.addFormat('optionalPhone', formats_1.optionalPhoneFormat);
exports.ajv.addFormat('ssn', formats_1.ssnFormat);
exports.ajv.addFormat('digits', formats_1.digitsFormat);
exports.ajv.addFormat('dataUriBase64Image', formats_1.dataUriBase64ImageFormat);
exports.ajv.addFormat('iso4217', formats_1.iso4217Format);
exports.ajv.addFormat('iso4217Amount', formats_1.iso4217AmountFormat);
exports.ajv.addFormat('iso4217AmountRange', formats_1.iso4217AmountRangeFormat);
exports.ajv.addFormat('address', formats_1.addressFormat);
exports.ajv.addFormat('gender', formats_1.genderFormat);
exports.ajv.addFormat('iso3361Alpha2', formats_1.iso3166Alpha2CountryCodeFormat);
exports.ajv.addFormat('iso3166', formats_1.iso3166CodeFormat);
exports.ajv.addFormat('documentType', formats_1.documentTypeFormat);
exports.ajv.addFormat('confidenceLevel', formats_1.confidenceLevelFormat);
exports.ajv.addFormat('boolean', formats_1.booleanFormat);
exports.ajv.addFormat('usZipCode', /^\d{5}(?:[-\s]\d{4})?$/);
fs_1.default.writeFileSync('./../schemas.json', JSON.stringify(schemas_1.schemas, null, 2));
//# sourceMappingURL=ajv.js.map