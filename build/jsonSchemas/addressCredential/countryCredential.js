"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
const values_1 = require("../../values");
exports.countryCredentialJsonSchema = type_1.Type.Object({
    country: type_1.Type.String({
        format: 'iso3361Alpha2',
        examples: ['US', 'CA', 'MX'],
        description: "A country's ISO 3166-1 alpha-2 code.",
        title: 'Country',
        default: 'US',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Select,
            options: Array.from(values_1.countrySelectOptions)
        }
    })
}, { $id: 'CountryCredential' });
//# sourceMappingURL=countryCredential.js.map