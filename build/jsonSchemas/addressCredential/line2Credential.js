"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.line2CredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.line2CredentialJsonSchema = type_1.Type.Object({
    line2: type_1.Type.Optional(type_1.Type.String({
        description: 'The second line of the address.',
        examples: ['Apt #4', 'Suite 200'],
        label: 'Address Line 2',
        grouping: 'Address'
    }))
}, {
    $id: 'Line2Credential'
});
//# sourceMappingURL=line2Credential.js.map