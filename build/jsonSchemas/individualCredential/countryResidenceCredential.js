"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryResidenceCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.countryResidenceCredentialJsonSchema = typebox_1.Type.Object({
    country: typebox_1.Type.String({
        format: 'iso3361Alpha2',
        description: "A person's country of residence in ISO 3166-1 alpha-2 format.",
        examples: ['US', 'CA', 'MX']
    })
}, { $id: 'CountryResidenceCredential', additionalProperties: false });
//# sourceMappingURL=countryResidenceCredential.js.map