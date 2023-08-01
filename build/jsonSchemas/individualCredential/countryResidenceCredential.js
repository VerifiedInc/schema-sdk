"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryResidenceCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.countryResidenceCredentialJsonSchema = type_1.Type.Object({
    country: type_1.Type.String({
        format: 'iso3361Alpha2',
        description: "A person's country of residence in ISO 3166-1 alpha-2 format.",
        examples: ['US', 'CA', 'MX'],
        title: 'Country',
        displayFormat: displayFormat_1.DisplayFormat.String
    })
}, { $id: 'CountryResidenceCredential' });
//# sourceMappingURL=countryResidenceCredential.js.map