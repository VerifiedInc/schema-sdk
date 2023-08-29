"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.birthDateCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.birthDateCredentialJsonSchema = type_1.Type.Object({
    birthDate: type_1.Type.String({
        format: 'unixMsEpochDayFormat',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch, which equates to 12:00:00:000 UTC of the date',
        examples: ['631195200000', '-331560000000'],
        title: 'Birthday',
        displayFormat: displayFormat_1.DisplayFormat.Date,
        input: {
            type: 'Date'
        }
    })
}, { $id: 'BirthDateCredential' });
//# sourceMappingURL=birthDateCredential.js.map