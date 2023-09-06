"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const values_1 = require("../../values");
const inputType_1 = require("../../enums/inputType");
exports.stateCredentialJsonSchema = type_1.Type.Object({
    state: type_1.Type.String({
        description: "A state's ISO 3166-2 code.",
        examples: ['CA', 'GA', 'SP'],
        format: 'iso3166RegionCode',
        title: 'State or Region',
        displayFormat: displayFormat_1.DisplayFormat.State,
        input: {
            type: inputType_1.InputType.Text
        }
    })
}, {
    $id: 'StateCredential',
    if: type_1.Type.Object({
        country: type_1.Type.String({
            description: 'If the country from Address Credential is the US.',
            const: 'US'
        })
    }),
    then: type_1.Type.Object({
        state: type_1.Type.String({
            description: 'Then the state must be a valid US state.',
            format: 'iso3166USRegionCode',
            title: 'State',
            input: {
                type: inputType_1.InputType.Select,
                options: Array.from(values_1.ISO31662USCodes)
            }
        })
    })
});
//# sourceMappingURL=stateCredential.js.map