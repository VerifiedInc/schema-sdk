"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issuanceDateCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.issuanceDateCredentialJsonSchema = type_1.Type.Object({
    issuanceDate: type_1.Type.String({
        format: 'digits',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
        examples: ['1687488596000', '-45709'],
        title: 'Issuance Date'
    })
}, { $id: 'IssuanceDateCredential' });
//# sourceMappingURL=issuanceDateCredential.js.map