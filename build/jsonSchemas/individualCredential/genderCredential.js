"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genderCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const values_1 = require("../../values");
const inputType_1 = require("../../enums/inputType");
exports.genderCredentialJsonSchema = type_1.Type.Object({
    gender: type_1.Type.String({
        format: 'gender',
        description: "A person's gender",
        examples: ['Male', 'Female', 'Other', 'Non-Binary'],
        title: 'Gender',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Select,
            options: Array.from(values_1.genders)
        }
    })
}, { $id: 'GenderCredential' });
//# sourceMappingURL=genderCredential.js.map