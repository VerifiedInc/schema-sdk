"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livenessCredentialJsonSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.livenessCredentialJsonSchema = typebox_1.Type.Object({
    confidence: typebox_1.Type.String({
        format: 'confidenceLevel',
        description: "A person's liveliness confidence level during an IDV session",
        examples: ['Very High', 'High', 'Medium', 'Low', 'Very Low']
    })
}, { $id: 'LivenessCredential', additionalProperties: false });
//# sourceMappingURL=livenessCredential.js.map