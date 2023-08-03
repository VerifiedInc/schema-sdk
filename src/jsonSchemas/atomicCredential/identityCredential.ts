import { Static } from '@sinclair/typebox';
import { Type } from '../../type';

// special credential that is actually empty
export const identityCredentialJsonSchema = Type.Object(
  {},
  { $id: 'IdentityCredential', additionalProperties: false }
);

export type IdentityCredentialJsonSchema = Static<typeof identityCredentialJsonSchema>;
