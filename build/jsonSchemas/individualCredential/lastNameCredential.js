"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastNameCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.lastNameCredentialJsonSchema = type_1.Type.Object({
    lastName: type_1.Type.String({
        description: "A person's last name",
        examples: ['Smith', 'Garcia-Tony']
    })
}, { additionalProperties: false, $id: 'LastNameCredential' });
//# sourceMappingURL=lastNameCredential.js.map