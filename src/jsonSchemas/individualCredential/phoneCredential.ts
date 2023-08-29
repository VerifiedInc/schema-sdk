import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const phoneCredentialJsonSchema = Type.Object(
  {
    phone: Type.String({
      format: 'phone',
      description: 'A phone number in the E.164 format, [+][country code][number].',
      examples: ['+16175551212', '+14041238686'],
      title: 'Phone',
      displayFormat: DisplayFormat.PhoneNumber,
      input: {
        type: InputType.Phone
      }
    })
  },
  { $id: 'PhoneCredential' }
);

export type PhoneCredentialJsonSchema = Static<typeof phoneCredentialJsonSchema>;
