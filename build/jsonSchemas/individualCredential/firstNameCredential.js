"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstNameCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.firstNameCredentialJsonSchema = typebox_1.Type.Object({
    firstName: typebox_1.Type.String({
        description: "A person's first name",
        examples: ['John', 'Mary Kate']
    })
}, { $id: 'FirstNameCredential', additionalProperties: false });
//# sourceMappingURL=firstNameCredential.js.map