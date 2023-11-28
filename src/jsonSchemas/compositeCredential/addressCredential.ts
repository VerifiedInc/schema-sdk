import { Type } from '../../type';

import { cityCredentialJsonSchema } from '../addressCredential/cityCredential';
import { line1CredentialJsonSchema } from '../addressCredential/line1Credential';
import { line2CredentialJsonSchema } from '../addressCredential/line2Credential';
import { stateCredentialJsonSchema } from '../addressCredential/stateCredential';
import { countryCredentialJsonSchema } from '../addressCredential/countryCredential';
import { zipCodeCredentialJsonSchema } from '../addressCredential/zipCodeCredential';
import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const addressCredentialIntersectReferences = Type.Union([
  line1CredentialJsonSchema,
  line2CredentialJsonSchema,
  cityCredentialJsonSchema,
  stateCredentialJsonSchema,
  countryCredentialJsonSchema,
  zipCodeCredentialJsonSchema
]);

export const addressCredentialJsonSchema = Type.Union(
  [
    addressCredentialIntersectReferences,
    // Allow backwards compatibility with the old address format
    Type.Object({
      address: Type.String({
        format: 'address',
        description: 'Address in the format of: street, city, iso3166-code postal-code',
        examples: [
          '10 Downing Street, London, GB-ENG SW1A 2AA',
          '307 3rd Ave, Apt #4, San Austin, US-GA 18025-9876'
        ],
        title: 'Street Address',
        displayFormat: DisplayFormat.Address
      })
    })
  ],
  {
    $id: 'AddressCredential',
    unevaluatedProperties: false,
    errorMessage: {
      unevaluatedProperties: "AddressCredential doesn't match the schema"
    }
  }
);

export type AddressCredentialJsonSchema = Static<typeof addressCredentialJsonSchema>;
