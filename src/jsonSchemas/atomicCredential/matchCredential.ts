import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

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
);

export type MatchCredentialJsonSchema = Static<typeof matchCredentialJsonSchema>;
