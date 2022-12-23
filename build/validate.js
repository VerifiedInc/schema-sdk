"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOld = exports.validate = void 0;
const ajv_1 = require("./ajv");
const error_1 = require("./error");
/**
 * Function to validate the jsonSchema against the data.
 * @param type: string
 * @param data: any
 * @returns boolean
 */
function validate(type, data) {
    // adding schemas on demand instead of having to preload all of them.
    // ref: https://ajv.js.org/guide/managing-schemas.html#pre-adding-all-schemas-vs-adding-on-demand
    const validator = ajv_1.ajv.getSchema(type);
    if (!validator) {
        throw new error_1.SchemaError(undefined, `Schema not found for type: ${type}`);
    }
    const valid = validator(data);
    if (!valid) {
        console.error(validator.errors);
        throw new error_1.SchemaError(validator.errors);
    }
    return true;
}
exports.validate = validate;
/**
 * Function to validate the jsonSchema against the data.
 * @param jsonSchema
 * @param data
 * @returns boolean
 */
function validateOld(jsonSchema, data) {
    // adding schemas on demand instead of having to preload all of them.
    // ref: https://ajv.js.org/guide/managing-schemas.html#pre-adding-all-schemas-vs-adding-on-demand
    const validator = ajv_1.ajv.getSchema(jsonSchema.$id) || ajv_1.ajv.compile(jsonSchema);
    const valid = validator(data);
    if (!valid) {
        console.error(validator.errors);
        throw new error_1.SchemaError(validator.errors);
    }
    return true;
}
exports.validateOld = validateOld;
//# sourceMappingURL=validate.js.map