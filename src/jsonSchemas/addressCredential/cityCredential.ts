import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const cityCredentialJsonSchema = Type.Object(
  {
    city: Type.String({
      description: 'The city of the address.',
      examples: ['San Francisco', 'New York', 'Atlanta'],
      title: 'City',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Text
      }
    })
  },
  {
    $id: 'CityCredential'
  }
);
export type CityCredentialJsonSchema = Static<typeof cityCredentialJsonSchema>;
