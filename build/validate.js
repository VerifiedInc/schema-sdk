"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const ajv_1 = require("./ajv");
const error_1 = require("./error");
/**
 * Function to validate the credential schema based on type against the data.
 * @param type: string
 * @param data: any
 * @returns boolean
 */
function validate(type, data) {
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
//# sourceMappingURL=validate.js.map