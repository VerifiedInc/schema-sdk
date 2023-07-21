"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genderCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.genderCredentialJsonSchema = typebox_1.Type.Object({
    gender: typebox_1.Type.String({
        format: 'gender',
        description: "A person's gender",
        examples: ['Male', 'Female', 'Other', 'Non-Binary']
    })
}, { $id: 'GenderCredential', additionalProperties: false });
//# sourceMappingURL=genderCredential.js.map