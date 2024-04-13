import { Static } from '@sinclair/typebox';

import { Type } from '../../type';
import { phoneCredentialJsonSchema } from '../individualCredential';
import { lineTypeCredentialJsonSchema } from '../atomicCredential/lineTypeCredential';

export const phoneInfoCredentialJsonSchema = Type.Union(
  [Type.Union([phoneCredentialJsonSchema, lineTypeCredentialJsonSchema])],
  {
    $id: 'PhoneInfoCredential',
    unevaluatedProperties: false,
    errorMessage: {
      unevaluatedProperties: "PhoneInfoCredential doesn't match the schema"
    }
  }
);

export type PhoneInfoCredentialJsonSchema = Static<typeof phoneInfoCredentialJsonSchema>;
