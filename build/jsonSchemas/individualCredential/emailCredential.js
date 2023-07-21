"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.emailCredentialJsonSchema = typebox_1.Type.Object({
    email: typebox_1.Type.String({
        format: 'email',
        description: 'Standard, valid email address format.',
        examples: ['test@verified.inc', 'you+me@piedpiper.net']
    })
}, { $id: 'EmailCredential', additionalProperties: false });
//# sourceMappingURL=emailCredential.js.map