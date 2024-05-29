import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const zipCodeCredentialJsonSchema = Type.Object(
  {
    zipCode: Type.String({
      description: 'The zip code of the address.',
      examples: ['94103', '94103-1234'],
      title: 'Zip Code',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Text
      }
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
        format: 'usZipCode',
        input: {
          type: InputType.Text,
          pattern: '^[0-9]{5}(?:-[0-9]{4})?$' // 5 digits, or 5 digits followed by a dash and 4 more digits
        }
      })
    })
  }
);

export type ZipCodeCredentialJsonSchema = Static<typeof zipCodeCredentialJsonSchema>;
