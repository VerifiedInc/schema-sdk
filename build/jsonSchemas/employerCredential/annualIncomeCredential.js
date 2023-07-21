"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annualIncomeCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.annualIncomeCredentialJsonSchema = typebox_1.Type.Object({
    income: typebox_1.Type.String({
        format: 'iso4217Amount',
        description: 'Annual income with the preceding ISO4217 currency format.',
        examples: ['USD 101000', 'GBP 46000']
    })
}, { $id: 'AnnualIncomeCredential', additionalProperties: false });
//# sourceMappingURL=annualIncomeCredential.js.map