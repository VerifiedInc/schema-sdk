import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';

export const livenessCredentialJsonSchema = Type.Object(
  {
    confidence: Type.String({
      format: 'confidenceLevel',
      description: "A person's liveliness confidence level during an IDV session",
      examples: ['Very High', 'High', 'Medium', 'Low', 'Very Low']
    })
  },
  { $id: 'LivenessCredential', additionalProperties: false }
) as UnumJsonSchema;
