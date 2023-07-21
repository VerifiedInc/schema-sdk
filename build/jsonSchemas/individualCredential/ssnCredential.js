"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssnCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.ssnCredentialJsonSchema = typebox_1.Type.Object({
    ssn: typebox_1.Type.String({
        format: 'ssn',
        description: '9 digit social security number, with no dashes, in the format of: 123456789',
        examples: ['123456789', '333224444']
    })
}, { $id: 'SsnCredential', additionalProperties: false });
//# sourceMappingURL=ssnCredential.js.map