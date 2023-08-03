import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const cityCredentialJsonSchema = Type.Object(
  {
    city: Type.String({
      description: 'The city of the address.',
      examples: ['San Francisco', 'New York', 'Atlanta'],
      title: 'City',
      displayFormat: DisplayFormat.String
    })
  },
  {
    $id: 'CityCredential'
  }
);
export type CityCredentialJsonSchema = Static<typeof cityCredentialJsonSchema>;
