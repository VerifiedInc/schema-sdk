import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const zipCodeCredentialJsonSchema = Type.Object(
  {
    zipCode: Type.String({
      description: 'The zip code of the address.',
      examples: ['94103', '94103-1234', '82030-040'],
      title: 'Zip Code',
      displayFormat: DisplayFormat.String
    })
  },
  {
    $id: 'ZipCodeCredential',
    if: Type.Object({
      country: Type.String({
        description: 'If the country from Address Credential is the US.',
        const: 'US'
      })
    }),
    then: Type.Object({
      zipCode: Type.String({
        description: 'Then the zip code must be a valid US Zip Code.',
        format: 'usZipCode'
      })
    })
  }
);

export type ZipCodeCredentialJsonSchema = Static<typeof zipCodeCredentialJsonSchema>;
