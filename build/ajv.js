"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ajv = void 0;
const ajv_1 = __importDefault(require("ajv"));
const logger_1 = __importDefault(require("./logger"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const schemas_1 = require("./schemas");
// schemas to add to ajv instance options
const schemas = [
    schemas_1.ssnCredentialSchema,
    schemas_1.emailCredentialSchema,
    schemas_1.countryResidenceCredentialSchema,
    schemas_1.facialImageCredentialSchema,
    schemas_1.livelinessCredentialSchema,
    schemas_1.addressCredentialSchema,
    schemas_1.lastNameCredentialSchema,
    schemas_1.firstNameCredentialSchema,
    schemas_1.birthDateCredentialSchema,
    schemas_1.phoneCredentialSchema,
    schemas_1.fullNameCredentialSchema,
    schemas_1.genderCredential,
    schemas_1.governmentIdDocumentImageCredentialSchema,
    schemas_1.livelinessConfidenceCredentialSchema,
    schemas_1.facialMatchCredentialSchema,
    schemas_1.facialMatchConfidenceCredentialSchema,
    schemas_1.governmentIdTypeCredentialSchema,
    schemas_1.governmentIdDocumentBackImageCredentialSchema
];
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
//# sourceMappingURL=ajv.js.map