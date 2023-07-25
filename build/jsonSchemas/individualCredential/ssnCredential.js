"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssnCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.ssnCredentialJsonSchema = type_1.Type.Object({
    ssn: type_1.Type.String({
        format: 'ssn',
        description: '9 digit social security number, with no dashes, in the format of: 123456789',
        examples: ['123456789', '333224444']
    })
}, { $id: 'SsnCredential' });
//# sourceMappingURL=ssnCredential.js.map