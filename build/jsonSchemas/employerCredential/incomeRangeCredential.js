"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incomeRangeCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
// these are the ranges used by UNest
const options = [
    {
        value: 'USD min0_max25000',
        label: 'Under $25,000'
    },
    {
        value: 'USD min25000_max50000',
        label: '$25,000 - $50,000'
    },
    {
        value: 'USD min50000_max100000',
        label: '$50,000 - $100,000'
    },
    {
        value: 'USD min100000_max200000',
        label: '$100,000 - $200,000'
    },
    {
        value: 'USD min200000_max300000',
        label: '$200,000 - $300,000'
    },
    {
        value: 'USD min300000_max500000',
        label: '$300,000 - $500,000'
    },
    {
        value: 'USD min500000_max1200000',
        label: '$500,000 - $1,200,000'
    },
    {
        value: 'USD min1200000_max9999999',
        label: '$1,200,000 - $9,999,999'
    }
];
exports.incomeRangeCredentialJsonSchema = type_1.Type.Object({
    incomeRange: type_1.Type.String({
        format: 'iso4217AmountRange',
        description: 'Annual income range with the preceding ISO4217 currency code followed by min<value>_max<value>.',
        examples: ['USD min100000_max200000', 'GBP min40000_max50000'],
        title: 'Income Range',
        displayFormat: displayFormat_1.DisplayFormat.CurrencyRange,
        input: {
            type: inputType_1.InputType.Select,
            options
        }
    })
}, { $id: 'IncomeRangeCredential' });
//# sourceMappingURL=incomeRangeCredential.js.map