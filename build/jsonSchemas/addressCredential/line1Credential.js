"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.line1CredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.line1CredentialJsonSchema = type_1.Type.Object({
    line1: type_1.Type.String({
        description: 'The first line of the address.',
        examples: ['10 Downing Street', '307 3rd Ave', '1234 Main St'],
        title: 'Address Line 1'
    })
}, {
    $id: 'Line1Credential',
    grouping: 'Address'
});
//# sourceMappingURL=line1Credential.js.map