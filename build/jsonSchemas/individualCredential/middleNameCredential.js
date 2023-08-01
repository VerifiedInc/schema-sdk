"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleNameCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.middleNameCredentialJsonSchema = type_1.Type.Object({
    middleName: type_1.Type.Optional(type_1.Type.String({
        description: "A person's middle name",
        examples: ['Henry', 'Fitzgerald'],
        title: 'Middle Name'
    }))
}, { $id: 'MiddleNameCredential' });
//# sourceMappingURL=middleNameCredential.js.map