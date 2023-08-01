import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const line1CredentialJsonSchema = Type.Object(
  {
    line1: Type.String({
      description: 'The first line of the address.',
      examples: ['10 Downing Street', '307 3rd Ave', '1234 Main St'],
      title: 'Address Line 1'
    })
  },
  {
    $id: 'Line1Credential',
    grouping: 'Address'
  }
) as UnumJsonSchema;
