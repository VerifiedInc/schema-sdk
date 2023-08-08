"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.emailCredentialJsonSchema = type_1.Type.Object({
    email: type_1.Type.String({
        format: 'email',
        description: 'Standard, valid email address format.',
        examples: ['test@verified.inc', 'you+me@piedpiper.net'],
        title: 'Email',
        displayFormat: displayFormat_1.DisplayFormat.String
    })
}, { $id: 'EmailCredential' });
//# sourceMappingURL=emailCredential.js.map