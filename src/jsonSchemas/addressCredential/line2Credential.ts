import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const line2CredentialJsonSchema = Type.Object(
  {
    line2: Type.Optional(
      Type.String({
        description: 'The second line of the address.',
        examples: ['Apt #4', 'Suite 200']
      })
    )
  },
  {
    $id: 'Line2Credential',
    additionalProperties: false
  }
) as UnumJsonSchema;
