import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

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
) as UnumJsonSchema;
