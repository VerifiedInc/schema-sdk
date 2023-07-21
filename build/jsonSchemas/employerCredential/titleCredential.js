"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.titleCredentialJsonSchema = typebox_1.Type.Object({
    title: typebox_1.Type.String({
        description: 'Job title',
        examples: ['Software Engineer', 'Designer', 'Construction Worker']
    })
}, { $id: 'TitleCredential', additionalProperties: false });
//# sourceMappingURL=titleCredential.js.map