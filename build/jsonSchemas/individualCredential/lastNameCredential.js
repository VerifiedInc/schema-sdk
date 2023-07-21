"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastNameCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.lastNameCredentialJsonSchema = typebox_1.Type.Object({
    lastName: typebox_1.Type.String({
        description: "A person's last name",
        examples: ['Smith', 'Garcia-Tony']
    })
}, { $id: 'LastNameCredential', additionalProperties: false });
//# sourceMappingURL=lastNameCredential.js.map