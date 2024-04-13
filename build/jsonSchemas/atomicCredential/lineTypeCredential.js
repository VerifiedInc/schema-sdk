"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineTypeCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.lineTypeCredentialJsonSchema = type_1.Type.Object({
    type: type_1.Type.String({
        format: 'lineType',
        description: 'Line type associated with a phone number.',
        examples: ['Mobile', 'Landline', 'FixedVoIP', 'NonFixVoIP'],
        title: 'Phone Line Type',
        displayFormat: displayFormat_1.DisplayFormat.String
    })
}, { $id: 'LineTypeCredential' });
//# sourceMappingURL=lineTypeCredential.js.map