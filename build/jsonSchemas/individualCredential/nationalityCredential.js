"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nationalityCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const values_1 = require("../../values");
const inputType_1 = require("../../enums/inputType");
exports.nationalityCredentialJsonSchema = type_1.Type.Object({
    nationality: type_1.Type.String({
        format: 'iso3361Alpha2',
        description: "A person's birth country or country of citizenship in ISO 3166-1 alpha-2 format.",
        examples: ['US', 'CA', 'MX'],
        title: 'Nationality',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Select,
            options: Array.from(values_1.countrySelectOptions)
        }
    })
}, { $id: 'NationalityCredential' });
//# sourceMappingURL=nationalityCredential.js.map