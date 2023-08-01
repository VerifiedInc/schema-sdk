"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJsonSchema = void 0;
const ajv_1 = require("../ajv");
/**
 * Helper to return a json schema by type.
 * @param type
 * @returns
 */
function getJsonSchema(type) {
    const result = ajv_1.ajv.schemas[type];
    if (!result) {
        throw new Error(`Schema of type ${type} does not exist in the schema-sdk`);
    }
    return result;
}
exports.getJsonSchema = getJsonSchema;
//# sourceMappingURL=getJsonSchema.js.map