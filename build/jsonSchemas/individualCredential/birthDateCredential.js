"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.birthDateCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.birthDateCredentialJsonSchema = typebox_1.Type.Object({
    birthDate: typebox_1.Type.String({
        format: 'digits',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
        examples: ['1687488596000', '-45709']
    })
}, { $id: 'BirthDateCredential', additionalProperties: false });
//# sourceMappingURL=birthDateCredential.js.map