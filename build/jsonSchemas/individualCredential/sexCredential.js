"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sexCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const values_1 = require("../../values");
const inputType_1 = require("../../enums/inputType");
exports.sexCredentialJsonSchema = type_1.Type.Object({
    sex: type_1.Type.String({
        format: 'gender',
        description: "A person's sex",
        examples: ['Male', 'Female'],
        title: 'Sex',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Select,
            options: Array.from(values_1.sexes)
        }
    })
}, { $id: 'SexCredential' });
//# sourceMappingURL=sexCredential.js.map