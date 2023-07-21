import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';
import { ajv } from '../../ajv';

export const zipCodeCredentialJsonSchema = Type.Object(
  {
    zipCode: Type.String({
      description: 'The zip code of the address.',
      examples: ['94103', '94103-1234']
    })
  },
  {
    $id: 'ZipCodeCredential'
  }
) as UnumJsonSchema;

ajv.addSchema(zipCodeCredentialJsonSchema, zipCodeCredentialJsonSchema.$id);
