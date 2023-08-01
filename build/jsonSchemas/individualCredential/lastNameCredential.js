"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastNameCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.lastNameCredentialJsonSchema = type_1.Type.Object({
    lastName: type_1.Type.String({
        description: "A person's last name",
        examples: ['Smith', 'Garcia-Tony'],
        title: 'Last Name',
        displayFormat: displayFormat_1.DisplayFormat.String
    })
}, { $id: 'LastNameCredential' });
//# sourceMappingURL=lastNameCredential.js.map