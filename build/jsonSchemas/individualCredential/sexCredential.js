"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sexCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.sexCredentialJsonSchema = typebox_1.Type.Object({
    sex: typebox_1.Type.String({
        format: 'gender',
        description: "A person's sex",
        examples: ['Male', 'Female']
    })
}, { $id: 'SexCredential', additionalProperties: false });
//# sourceMappingURL=sexCredential.js.map