"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employerCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const annualIncomeCredential_1 = require("./annualIncomeCredential");
const employmentStartDateCredential_1 = require("../employerCredential/employmentStartDateCredential");
const titleCredential_1 = require("../employerCredential/titleCredential");
const incomeRangeCredential_1 = require("../employerCredential/incomeRangeCredential");
exports.employerCredentialJsonSchema = type_1.Type.Union([
    type_1.Type.Intersect([
        employmentStartDateCredential_1.employmentStartDateCredentialJsonSchema,
        titleCredential_1.titleCredentialJsonSchema,
        incomeRangeCredential_1.incomeRangeCredentialJsonSchema,
        annualIncomeCredential_1.annualIncomeCredentialJsonSchema
    ]),
    type_1.Type.Object({
        employer: type_1.Type.String({
            description: 'Employer name',
            examples: ['Acme Corp', 'Piped Piper', 'Hooli']
        })
    })
], {
    unevaluatedProperties: false,
    $id: 'EmployerCredential'
});
//# sourceMappingURL=employerCredential.js.map