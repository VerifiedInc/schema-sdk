import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const phoneCredentialJsonSchema = Type.Object(
  {
    phone: Type.String({
      format: 'phone',
      description: 'A phone number in the E.164 format, [+][country code][number].',
      examples: ['+16175551212', '+14041238686']
    })
  },
  { $id: 'PhoneCredential' }
) as UnumJsonSchema;
