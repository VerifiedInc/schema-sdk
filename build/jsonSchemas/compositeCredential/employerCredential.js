"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employerCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const annualIncomeCredential_1 = require("../employerCredential/annualIncomeCredential");
const jsonSchemas_1 = require("../../jsonSchemas");
exports.employerCredentialJsonSchema = typebox_1.Type.Composite([annualIncomeCredential_1.annualIncomeCredentialJsonSchema, jsonSchemas_1.employmentStartDateCredentialJsonSchema], {
    $id: 'EmployerCredential',
    additionalProperties: false
});
//# sourceMappingURL=employerCredential.js.map