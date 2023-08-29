"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
exports.cityCredentialJsonSchema = type_1.Type.Object({
    city: type_1.Type.String({
        description: 'The city of the address.',
        examples: ['San Francisco', 'New York', 'Atlanta'],
        title: 'City',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Text
        }
    })
}, {
    $id: 'CityCredential'
});
//# sourceMappingURL=cityCredential.js.map