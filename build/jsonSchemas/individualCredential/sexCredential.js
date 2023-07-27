"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sexCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.sexCredentialJsonSchema = type_1.Type.Object({
    sex: type_1.Type.String({
        format: 'gender',
        description: "A person's sex",
        examples: ['Male', 'Female']
    })
}, { $id: 'SexCredential' });
//# sourceMappingURL=sexCredential.js.map