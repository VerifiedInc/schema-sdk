"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchema = exports.jsonSchemasMap = void 0;
const typebox_1 = require("@sinclair/typebox");
const error_1 = require("./error");
const emailCredentialSchema = typebox_1.Type.Object({
    email: typebox_1.Type.String()
}, { $id: 'EmailCredentialType', additionalProperties: false });
const ssnCredentialSchema = typebox_1.Type.Object({
    ssn: typebox_1.Type.String()
}, { $id: 'SsnCredentialType', additionalProperties: false });
/**
 * Map of schemas.
 */
exports.jsonSchemasMap = new Map([
    ['EmailCredential', emailCredentialSchema],
    ['SsnCredential', ssnCredentialSchema]
]);
/**
 * Function to get the schema for a given type.
 * @param type
 * @returns
 */
function getSchema(type) {
    const schema = exports.jsonSchemasMap.get(type);
    if (!schema) {
        throw new error_1.SchemaError(undefined, `Schema not found for type: ${type}`);
    }
    return schema;
}
exports.getSchema = getSchema;
//# sourceMappingURL=schemas.js.map