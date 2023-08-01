import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const phoneCredentialJsonSchema = Type.Object(
  {
    phone: Type.String({
      format: 'phone',
      description: 'A phone number in the E.164 format, [+][country code][number].',
      examples: ['+16175551212', '+14041238686'],
      title: 'Phone',
      displayFormat: DisplayFormat.PhoneNumber
    })
  },
  { $id: 'PhoneCredential' }
) as UnumJsonSchema;
