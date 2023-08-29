"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
const inputType_1 = require("../../enums/inputType");
exports.titleCredentialJsonSchema = type_1.Type.Object({
    title: type_1.Type.String({
        description: 'Job title',
        examples: ['Software Engineer', 'Designer', 'Construction Worker'],
        title: 'Job Title',
        displayFormat: displayFormat_1.DisplayFormat.String,
        input: {
            type: inputType_1.InputType.Text
        }
    })
}, { $id: 'TitleCredential' });
//# sourceMappingURL=titleCredential.js.map