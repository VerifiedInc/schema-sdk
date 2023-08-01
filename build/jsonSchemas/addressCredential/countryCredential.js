"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.countryCredentialJsonSchema = type_1.Type.Object({
    country: type_1.Type.String({
        format: 'iso3361Alpha2',
        examples: ['US', 'CA', 'MX'],
        description: "A country's ISO 3166-1 alpha-2 code.",
        title: 'Country',
        displayFormat: displayFormat_1.DisplayFormat.String
    })
}, { $id: 'CountryCredential', grouping: 'Address' });
//# sourceMappingURL=countryCredential.js.map