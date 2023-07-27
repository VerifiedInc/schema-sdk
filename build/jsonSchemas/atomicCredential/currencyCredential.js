"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.currencyCredentialJsonSchema = type_1.Type.Object({
    currency: type_1.Type.String({
        description: 'The iso4217 currency code',
        examples: ['USD', 'EUR', 'GBP'],
        format: 'iso4217'
    })
}, {
    $id: 'CurrencyCredential'
});
//# sourceMappingURL=currencyCredential.js.map