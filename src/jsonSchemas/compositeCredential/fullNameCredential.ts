import { Static } from '@sinclair/typebox';

import { DisplayFormat } from '../../enums/displayFormat';
import { Type } from '../../type';
import { firstNameCredentialJsonSchema } from '../individualCredential/firstNameCredential';
import { lastNameCredentialJsonSchema } from '../individualCredential/lastNameCredential';
import { middleNameCredentialJsonSchema } from '../individualCredential/middleNameCredential';

export const fullNameCredentialJsonSchema = Type.Union(
  [
    Type.Union([firstNameCredentialJsonSchema, middleNameCredentialJsonSchema, lastNameCredentialJsonSchema]),
    Type.Object({
      fullName: Type.String({
        description: "A person's full name",
        examples: ['John Smith', 'John Michael Smith', 'Mary Kate Sierra Garcia-Tony'],
        title: 'Full Name',
        displayFormat: DisplayFormat.String
      })
    })
  ],
  {
    $id: 'FullNameCredential',
    unevaluatedProperties: false,
    errorMessage: {
      unevaluatedProperties: "FullNameCredential doesn't match the schema"
    }
  }
);

export type FullNameCredentialJsonSchema = Static<typeof fullNameCredentialJsonSchema>;
