"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sexCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.sexCredentialJsonSchema = type_1.Type.Object({
    sex: type_1.Type.String({
        format: 'gender',
        description: "A person's sex",
        examples: ['Male', 'Female'],
        title: 'Sex',
        displayFormat: displayFormat_1.DisplayFormat.String
    })
}, { $id: 'SexCredential' });
//# sourceMappingURL=sexCredential.js.map