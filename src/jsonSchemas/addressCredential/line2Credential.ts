import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const line2CredentialJsonSchema = Type.Object(
  {
    line2: Type.Optional(
      Type.String({
        description: 'The second line of the address.',
        examples: ['Apt #4', 'Suite 200'],
        label: 'Address Line 2',
        grouping: 'Address'
      })
    )
  },
  {
    $id: 'Line2Credential'
  }
) as UnumJsonSchema;
