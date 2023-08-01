import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const livenessCredentialJsonSchema = Type.Object(
  {
    confidence: Type.String({
      format: 'confidenceLevel',
      description: "A person's liveliness confidence level during an IDV session",
      examples: ['Very High', 'High', 'Medium', 'Low', 'Very Low'],
      title: 'Liveness Confidence',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'LivenessCredential' }
) as UnumJsonSchema;
