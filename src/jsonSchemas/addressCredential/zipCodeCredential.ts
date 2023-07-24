import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const zipCodeCredentialJsonSchema = Type.Object(
  {
    zipCode: Type.String({
      description: 'The zip code of the address.',
      examples: ['94103', '94103-1234']
    })
  },
  {
    $id: 'ZipCodeCredential',
    if: {
      type: 'object',
      properties: {
        country: { const: 'US' }
      },
      required: ['country']
    },
    then: {
      properties: {
        zipCode: { format: 'usZipCode' }
      }
    },
    additionalProperties: false
  }
) as UnumJsonSchema;
