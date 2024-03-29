"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryResidenceCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const values_1 = require("../../values");
const inputType_1 = require("../../enums/inputType");
exports.countryResidenceCredentialJsonSchema = type_1.Type.Object({
    country: type_1.Type.String({
        format: 'iso3361Alpha2',
        description: "A person's country of residence in ISO 3166-1 alpha-2 format.",
        examples: ['US', 'CA', 'MX'],
        title: 'Country',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Select,
            options: Array.from(values_1.countrySelectOptions)
        }
    })
}, { $id: 'CountryResidenceCredential' });
//# sourceMappingURL=countryResidenceCredential.js.map