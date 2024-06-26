"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ajv = void 0;
// Using Ajv 2019 for access to JSON Schema Draft 2019 and the new features like $data, $merge, unevaluatedProperties, etc.
// 100% backwards compatible with Draft 7.
const _2019_1 = __importDefault(require("ajv/dist/2019"));
const logger_1 = __importDefault(require("./logger"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const jsonSchemas_1 = require("./jsonSchemas");
const formats_1 = require("./formats");
const displayFormat_1 = require("./enums/displayFormat");
const inputType_1 = require("./enums/inputType");
const ajv_errors_1 = __importDefault(require("ajv-errors"));
// get all the values of the jsonSchemas object in an array
// schemas to add to ajv instance options
const schemas = Object.values(jsonSchemas_1.jsonSchemas);
// filter all duplicate schema with same $id, looking to $id inside allOf, anyOf, oneOf recursively
const properties = ['allOf', 'anyOf', 'oneOf'];
// Get the IDs from inside allOf, anyOf, oneOf
const childrenIds = new Set();
const getIds = (schema) => {
    properties.forEach((property) => {
        if (schema[property]) {
            schema[property].forEach((childSchema) => {
                if (childSchema.$id) {
                    childrenIds.add(childSchema.$id);
                }
                getIds(childSchema);
            });
        }
    });
};
schemas.forEach((schema) => {
    getIds(schema);
});
// filter schemas with same $id
const filteredSchemas = schemas.filter((schema) => {
    if (schema.$id) {
        return !childrenIds.has(schema.$id);
    }
    return true;
});
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
    removeAdditional: true,
    logger: logger_1.default,
    schemas: filteredSchemas
});
// Adding default formats to ajv
(0, ajv_formats_1.default)(exports.ajv);
// Adding ajv-errors to ajv
(0, ajv_errors_1.default)(exports.ajv);
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
exports.ajv.addFormat('unixMsEpochDayFormat', formats_1.unixMsEpochDayFormat);
exports.ajv.addFormat('dateUsFormat', formats_1.dateUsFormat);
exports.ajv.addFormat('dateISO8601Format', formats_1.dateISO8601Format);
exports.ajv.addFormat('dataUriBase64Image', formats_1.dataUriBase64ImageFormat);
exports.ajv.addFormat('iso4217', formats_1.iso4217Format);
exports.ajv.addFormat('iso4217Amount', formats_1.iso4217AmountFormat);
exports.ajv.addFormat('iso4217AmountRange', formats_1.iso4217AmountRangeFormat);
exports.ajv.addFormat('address', formats_1.addressFormat);
exports.ajv.addFormat('gender', formats_1.genderFormat);
exports.ajv.addFormat('iso3361Alpha2', formats_1.iso3166Alpha2CountryCodeFormat);
exports.ajv.addFormat('iso3166USRegionCode', formats_1.iso3166USRegionCodeFormat);
exports.ajv.addFormat('iso3166RegionCode', formats_1.iso3166RegionCodeFormat);
exports.ajv.addFormat('iso3166', formats_1.iso3166CodeFormat);
exports.ajv.addFormat('documentType', formats_1.documentTypeFormat);
exports.ajv.addFormat('confidenceLevel', formats_1.confidenceLevelFormat);
exports.ajv.addFormat('boolean', formats_1.booleanFormat);
exports.ajv.addFormat('usZipCode', formats_1.usZipCodeFormat);
exports.ajv.addFormat('lineType', formats_1.lineTypeFormat);
/************************************
 * Add custom keywords to ajv below *
 ************************************/
// Note: not really a "functional" keyword in the sense of affecting ajv validation, but useful for clients displaying the data
const displayFormatDefinition = {
    type: 'string',
    metaSchema: {
        type: 'string',
        enum: Object.values(displayFormat_1.DisplayFormat)
    },
    keyword: 'displayFormat'
};
exports.ajv.addKeyword('displayFormat', displayFormatDefinition);
// allows input information describing how data should be collected to be added to the schema
const inputDefinition = {
    type: 'object',
    keyword: 'input',
    metaSchema: {
        type: 'object',
        properties: {
            // type (required) describes the type of input to use
            type: {
                type: 'string',
                enum: Object.values(inputType_1.InputType)
            },
            // options (optional) describes the options to use for a select input
            options: {
                type: 'array',
                items: {
                    // items can be either a string or an object with a value and label
                    oneOf: [
                        {
                            type: 'object',
                            properties: {
                                value: {
                                    type: 'string'
                                },
                                label: {
                                    type: 'string'
                                }
                            }
                        },
                        {
                            type: 'string'
                        }
                    ]
                }
            },
            // pattern (optional) describes an optional regex pattern to use for a text input
            pattern: {
                type: 'string'
            }
        },
        required: ['type']
    }
};
exports.ajv.addKeyword('input', inputDefinition);
//# sourceMappingURL=ajv.js.map