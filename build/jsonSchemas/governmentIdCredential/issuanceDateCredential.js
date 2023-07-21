"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issuanceDateCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.issuanceDateCredentialJsonSchema = typebox_1.Type.Object({
    issuanceDate: typebox_1.Type.String({
        format: 'digits',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
        examples: ['1687488596000', '-45709']
    })
}, { $id: 'IssuanceDateCredential', additionalProperties: false });
//# sourceMappingURL=issuanceDateCredential.js.map