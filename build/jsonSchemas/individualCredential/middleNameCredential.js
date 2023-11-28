"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleNameCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
exports.middleNameCredentialJsonSchema = type_1.Type.Object({
    middleName: type_1.Type.String({
        description: "A person's middle name",
        examples: ['Henry', 'Fitzgerald'],
        title: 'Middle Name',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Text
        }
    })
}, { $id: 'MiddleNameCredential' });
//# sourceMappingURL=middleNameCredential.js.map