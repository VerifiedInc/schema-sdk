import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const matchCredentialJsonSchema = Type.Object(
  {
    confidence: Type.String({
      format: 'confidenceLevel',
      description: "A person's facial match confidence score during an IDV session",
      examples: ['Very High', 'High', 'Medium', 'Low', 'Very Low']
    })
  },
  { $id: 'MatchCredential', additionalProperties: false }
) as UnumJsonSchema;
