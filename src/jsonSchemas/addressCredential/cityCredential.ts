import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const cityCredentialJsonSchema = Type.Object(
  {
    city: Type.String({
      description: 'The city of the address.',
      examples: ['San Francisco', 'New York', 'Atlanta'],
      title: 'City'
    })
  },
  {
    $id: 'CityCredential',
    grouping: 'Address'
  }
) as UnumJsonSchema;
