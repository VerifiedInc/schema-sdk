"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssnCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.ssnCredentialJsonSchema = type_1.Type.Object({
    ssn: type_1.Type.String({
        format: 'ssn',
        description: '9 digit social security number, with no dashes, in the format of: 123456789',
        examples: ['123456789', '333224444'],
        title: 'Social Security Number',
        displayFormat: displayFormat_1.DisplayFormat.SSN
    })
}, { $id: 'SsnCredential' });
//# sourceMappingURL=ssnCredential.js.map