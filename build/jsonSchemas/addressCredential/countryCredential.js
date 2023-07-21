"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.countryCredentialJsonSchema = typebox_1.Type.Object({
    country: typebox_1.Type.String({
        format: 'iso3361Alpha2',
        examples: ['US', 'CA', 'MX'],
        description: "A country's ISO 3166-1 alpha-2 code."
    })
}, { $id: 'CountryCredential', additionalProperties: false });
//# sourceMappingURL=countryCredential.js.map