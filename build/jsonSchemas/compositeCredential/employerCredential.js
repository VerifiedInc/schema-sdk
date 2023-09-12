"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employerCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const annualIncomeCredential_1 = require("./annualIncomeCredential");
const employmentStartDateCredential_1 = require("../employerCredential/employmentStartDateCredential");
const titleCredential_1 = require("../employerCredential/titleCredential");
const incomeRangeCredential_1 = require("../employerCredential/incomeRangeCredential");
const employerNameCredential_1 = require("../employerCredential/employerNameCredential");
const displayFormat_1 = require("../../enums/displayFormat");
exports.employerCredentialJsonSchema = type_1.Type.Union([
    type_1.Type.IntersectReferences([
        type_1.Type.Optional(employerNameCredential_1.employerNameCredentialJsonSchema),
        type_1.Type.Optional(employmentStartDateCredential_1.employmentStartDateCredentialJsonSchema),
        type_1.Type.Optional(titleCredential_1.titleCredentialJsonSchema),
        type_1.Type.Optional(incomeRangeCredential_1.incomeRangeCredentialJsonSchema),
        type_1.Type.Optional(annualIncomeCredential_1.annualIncomeCredentialJsonSchema)
    ]),
    type_1.Type.Object({
        employer: type_1.Type.String({
            description: 'Employer Name',
            examples: ['Acme Corp', 'Piped Piper', 'Hooli'],
            title: 'Employer',
            displayFormat: displayFormat_1.DisplayFormat.String
        })
    })
], {
    $id: 'EmployerCredential',
    unevaluatedProperties: false
});
//# sourceMappingURL=employerCredential.js.map