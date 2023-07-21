"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.line1CredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.line1CredentialJsonSchema = typebox_1.Type.Object({
    line1: typebox_1.Type.String({
        description: 'The first line of the address.',
        examples: ['10 Downing Street', '307 3rd Ave', '1234 Main St']
    })
}, {
    $id: 'Line1Credential'
});
//# sourceMappingURL=line1Credential.js.map