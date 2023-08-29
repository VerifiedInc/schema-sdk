"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstNameCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
exports.firstNameCredentialJsonSchema = type_1.Type.Object({
    firstName: type_1.Type.String({
        description: "A person's first name",
        examples: ['John', 'Mary Kate'],
        title: 'First Name',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Text
        }
    })
}, { $id: 'FirstNameCredential' });
//# sourceMappingURL=firstNameCredential.js.map