import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const line1CredentialJsonSchema = Type.Object(
  {
    line1: Type.String({
      description: 'The first line of the address.',
      examples: ['10 Downing Street', '307 3rd Ave', '1234 Main St'],
      title: 'Address Line 1',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Text
      }
    })
  },
  {
    $id: 'Line1Credential'
  }
);

export type Line1CredentialJsonSchema = Static<typeof line1CredentialJsonSchema>;
