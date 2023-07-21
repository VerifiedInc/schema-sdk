"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expirationDateCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.expirationDateCredentialJsonSchema = typebox_1.Type.Object({
    expirationDate: typebox_1.Type.String({
        format: 'digits',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
        examples: ['1687488596000', '-45709']
    })
}, { $id: 'ExpirationDateCredential', additionalProperties: false });
//# sourceMappingURL=expirationDateCredential.js.map