"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employerNameCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
exports.employerNameCredentialJsonSchema = type_1.Type.Object({
    employer: type_1.Type.String({
        description: 'Employer name',
        examples: ['Acme Corp', 'Piped Piper', 'Hooli'],
        title: 'Employer',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Text
        }
    })
}, { $id: 'EmployerNameCredential' });
//# sourceMappingURL=employerNameCredential.js.map