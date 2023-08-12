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
        employmentStartDateCredential_1.employmentStartDateCredentialJsonSchema,
        titleCredential_1.titleCredentialJsonSchema,
        incomeRangeCredential_1.incomeRangeCredentialJsonSchema,
        annualIncomeCredential_1.annualIncomeCredentialJsonSchema,
        employerNameCredential_1.employerNameCredentialJsonSchema
    ]),
    type_1.Type.Object({
        employer: type_1.Type.String({
            description: 'Employer name',
            examples: ['Acme Corp', 'Piped Piper', 'Hooli'],
            title: 'Employer',
            displayFormat: displayFormat_1.DisplayFormat.String
        })
    }, {
        additionalProperties: false
    })
], {
    unevaluatedProperties: false,
    $id: 'EmployerCredential'
});
//# sourceMappingURL=employerCredential.js.map