import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';

// special credential that is actually empty
export const identityCredentialJsonSchema = Type.Object(
  {},
  { $id: 'IdentityCredential', additionalProperties: false }
) as UnumJsonSchema;
