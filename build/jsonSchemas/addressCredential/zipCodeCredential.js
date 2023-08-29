"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipCodeCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
exports.zipCodeCredentialJsonSchema = type_1.Type.Object({
    zipCode: type_1.Type.String({
        description: 'The zip code of the address.',
        examples: ['94103', '94103-1234', '82030-040'],
        title: 'Zip Code',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Text
        }
    })
}, {
    $id: 'ZipCodeCredential',
    if: type_1.Type.Object({
        country: type_1.Type.String({
            description: 'If the country from Address Credential is the US.',
            const: 'US'
        })
    }),
    then: type_1.Type.Object({
        zipCode: type_1.Type.String({
            description: 'Then the zip code must be a valid US Zip Code.',
            format: 'usZipCode',
            input: {
                type: inputType_1.InputType.Text,
                pattern: '^[0-9]{5}(?:-[0-9]{4})?$' // 5 digits, or 5 digits followed by a dash and 4 more digits
            }
        })
    })
});
//# sourceMappingURL=zipCodeCredential.js.map