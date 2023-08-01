"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issuanceDateCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.issuanceDateCredentialJsonSchema = type_1.Type.Object({
    issuanceDate: type_1.Type.String({
        format: 'unixMsEpochDayFormat',
        description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch, which is the 12th hour of the issuance day UTC, GMT+0000',
        examples: ['631195200000', '-331560000000'],
        title: 'Issuance Date',
        displayFormat: displayFormat_1.DisplayFormat.Date
    })
}, { $id: 'IssuanceDateCredential' });
//# sourceMappingURL=issuanceDateCredential.js.map