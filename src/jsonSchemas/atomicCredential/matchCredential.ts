import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const matchCredentialJsonSchema = Type.Object(
  {
    confidence: Type.String({
      format: 'confidenceLevel',
      description: "A person's facial match confidence score during an IDV session",
      examples: ['Very High', 'High', 'Medium', 'Low', 'Very Low'],
      title: 'Match Confidence',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'MatchCredential' }
) as UnumJsonSchema;
