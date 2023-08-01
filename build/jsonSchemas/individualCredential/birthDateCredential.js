"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.birthDateCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.birthDateCredentialJsonSchema = type_1.Type.Object({
    birthDate: type_1.Type.String({
        format: 'unixMsEpochDayFormat',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch which is the 12th our of the birth day UTC, GMT+0000',
        examples: ['631224000', '-331534800'],
        title: 'Birthday',
        displayFormat: displayFormat_1.DisplayFormat.Date
    })
}, { $id: 'BirthDateCredential' });
//# sourceMappingURL=birthDateCredential.js.map