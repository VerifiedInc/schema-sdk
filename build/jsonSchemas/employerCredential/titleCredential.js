"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.titleCredentialJsonSchema = type_1.Type.Object({
    title: type_1.Type.String({
        description: 'Job title',
        examples: ['Software Engineer', 'Designer', 'Construction Worker']
    })
}, { $id: 'TitleCredential', additionalProperties: false });
//# sourceMappingURL=titleCredential.js.map