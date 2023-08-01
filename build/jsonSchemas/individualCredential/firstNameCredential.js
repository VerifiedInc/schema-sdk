"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstNameCredentialJsonSchema = void 0;
const type_1 = require("../../type");
exports.firstNameCredentialJsonSchema = type_1.Type.Object({
    firstName: type_1.Type.String({
        description: "A person's first name",
        examples: ['John', 'Mary Kate'],
        title: 'First Name'
    })
}, { $id: 'FirstNameCredential' });
//# sourceMappingURL=firstNameCredential.js.map