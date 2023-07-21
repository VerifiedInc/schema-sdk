"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.matchCredentialJsonSchema = typebox_1.Type.Object({
    confidence: typebox_1.Type.String({
        format: 'confidenceLevel',
        description: "A person's facial match confidence score during an IDV session",
        examples: ['Very High', 'High', 'Medium', 'Low', 'Very Low']
    })
}, { $id: 'MatchCredential', additionalProperties: false });
//# sourceMappingURL=matchCredential.js.map