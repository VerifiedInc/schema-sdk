"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employerCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const annualIncomeCredential_1 = require("./annualIncomeCredential");
const employmentStartDateCredential_1 = require("../employerCredential/employmentStartDateCredential");
const titleCredential_1 = require("../employerCredential/titleCredential");
const incomeRangeCredential_1 = require("../employerCredential/incomeRangeCredential");
const employerNameCredential_1 = require("../employerCredential/employerNameCredential");
exports.employerCredentialJsonSchema = type_1.Type.Union([
    type_1.Type.Union([
        employerNameCredential_1.employerNameCredentialJsonSchema,
        employmentStartDateCredential_1.employmentStartDateCredentialJsonSchema,
        titleCredential_1.titleCredentialJsonSchema,
        incomeRangeCredential_1.incomeRangeCredentialJsonSchema,
        annualIncomeCredential_1.annualIncomeCredentialJsonSchema
    ])
], {
    $id: 'EmployerCredential',
    unevaluatedProperties: false,
    errorMessage: {
        unevaluatedProperties: "EmployerCredential doesn't match the schema"
    }
});
//# sourceMappingURL=employerCredential.js.map