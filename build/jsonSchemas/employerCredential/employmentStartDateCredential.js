"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employmentStartDateCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.employmentStartDateCredentialJsonSchema = type_1.Type.Object({
    startDate: type_1.Type.String({
        format: 'digits',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
        examples: ['1687488596000', '-45709']
    })
}, { $id: 'EmploymentStartDateCredential', additionalProperties: false });
//# sourceMappingURL=employmentStartDateCredential.js.map