"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.line2CredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.line2CredentialJsonSchema = typebox_1.Type.Object({
    line2: typebox_1.Type.String({
        description: 'The second line of the address.',
        examples: ['Apt #4', 'Suite 200']
    })
}, {
    $id: 'Line2Credential'
});
//# sourceMappingURL=line2Credential.js.map