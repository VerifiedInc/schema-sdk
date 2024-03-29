"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employmentStartDateCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
exports.employmentStartDateCredentialJsonSchema = type_1.Type.Object({
    startDate: type_1.Type.String({
        format: 'unixMsEpochDayFormat',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch, which equates to 12:00:00:000 UTC of the date',
        examples: ['631195200000', '-331560000000'],
        title: 'Employment Start Date',
        displayFormat: displayFormat_1.DisplayFormat.Date,
        input: {
            type: inputType_1.InputType.Date
        }
    })
}, { $id: 'EmploymentStartDateCredential' });
//# sourceMappingURL=employmentStartDateCredential.js.map