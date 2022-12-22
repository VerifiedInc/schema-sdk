"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonSchemas = exports.ssnCredentialSchema = exports.emailCredentialSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.emailCredentialSchema = typebox_1.Type.Object({
    email: typebox_1.Type.String()
}, { $id: 'EmailCredentialType', additionalProperties: false });
exports.ssnCredentialSchema = typebox_1.Type.Object({
    ssn: typebox_1.Type.String()
}, { $id: 'SsnCredentialType', additionalProperties: false });
exports.jsonSchemas = new Map([
    ['EmailCredential', exports.emailCredentialSchema],
    ['SsnCredential', exports.ssnCredentialSchema]
]);
//# sourceMappingURL=schemas.js.map