"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incomeRangeCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
const values_1 = require("../../values");
exports.incomeRangeCredentialJsonSchema = type_1.Type.Object({
    incomeRange: type_1.Type.String({
        format: 'iso4217AmountRange',
        description: 'Annual income range with the preceding ISO4217 currency code followed by min<value>_max<value>.',
        examples: ['USD min100000_max200000', 'GBP min40000_max50000'],
        title: 'Income Range',
        displayFormat: displayFormat_1.DisplayFormat.CurrencyRange,
        input: {
            type: inputType_1.InputType.Select,
            options: values_1.incomeRangeOptions
        }
    })
}, { $id: 'IncomeRangeCredential' });
//# sourceMappingURL=incomeRangeCredential.js.map