"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchCredentialJsonSchema = void 0;
const type_1 = require("../../type");
const displayFormat_1 = require("../../enums/displayFormat");
exports.matchCredentialJsonSchema = type_1.Type.Object({
    confidence: type_1.Type.String({
        format: 'confidenceLevel',
        description: "A person's facial match confidence score during an IDV session",
        examples: ['Very High', 'High', 'Medium', 'Low', 'Very Low'],
        title: 'Match Confidence',
        displayFormat: displayFormat_1.DisplayFormat.String
    })
}, { $id: 'MatchCredential' });
//# sourceMappingURL=matchCredential.js.map