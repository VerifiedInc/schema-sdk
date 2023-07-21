import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';
import { cityCredentialJsonSchema } from '../addressCredential/cityCredential';
import { line1CredentialJsonSchema } from '../addressCredential/line1Credential';
import { line2CredentialJsonSchema } from '../addressCredential/line2Credential';
import { stateCredentialJsonSchema } from '../addressCredential/stateCredential';
import { countryCredentialJsonSchema } from '../addressCredential/countryCredential';
import { zipCodeCredentialJsonSchema } from '../addressCredential/zipCodeCredential';
import { ajv } from '../../ajv';

export const addressCredentialJsonSchema = Type.Union(
  [
    Type.Intersect([
      line1CredentialJsonSchema,
      line2CredentialJsonSchema,
      cityCredentialJsonSchema,
      stateCredentialJsonSchema,
      countryCredentialJsonSchema,
      zipCodeCredentialJsonSchema
    ]),
    Type.Object({
      address: Type.String({
        format: 'address',
        description: 'Address in the format of: street, city, iso3166-code postal-code',
        examples: [
          '10 Downing Street, London, GB-ENG SW1A 2AA',
          '307 3rd Ave, Apt #4, San Austin, US-GA 18025-9876'
        ]
      })
    })
  ],
  {
    $id: 'AddressCompositeCredential'
  }
) as unknown as UnumJsonSchema;

ajv.addSchema(addressCredentialJsonSchema, addressCredentialJsonSchema.$id);
