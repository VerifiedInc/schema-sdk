"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incomeRangeCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.incomeRangeCredentialJsonSchema = type_1.Type.Object({
    income: type_1.Type.String({
        format: 'iso4217AmountRange',
        description: 'Annual income range with the preceding ISO4217 currency code followed by min<value>_max<value>.',
        examples: ['USD min100000_max200000', 'GBP min40000_max50000']
    })
}, { $id: 'IncomeRangeCredential', additionalProperties: false });
//# sourceMappingURL=incomeRangeCredential.js.map