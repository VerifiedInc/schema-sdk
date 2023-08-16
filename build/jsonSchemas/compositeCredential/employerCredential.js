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
        employerNameCredential_1.employerNameCredentialJsonSchema,
        employmentStartDateCredential_1.employmentStartDateCredentialJsonSchema,
        titleCredential_1.titleCredentialJsonSchema,
        incomeRangeCredential_1.incomeRangeCredentialJsonSchema,
        annualIncomeCredential_1.annualIncomeCredentialJsonSchema
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