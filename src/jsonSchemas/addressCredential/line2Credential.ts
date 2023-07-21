import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';

export const line2CredentialJsonSchema = Type.Object(
  {
    line2: Type.String({
      description: 'The second line of the address.',
      examples: ['Apt #4', 'Suite 200']
    })
  },
  {
    $id: 'Line2Credential'
  }
) as UnumJsonSchema;
