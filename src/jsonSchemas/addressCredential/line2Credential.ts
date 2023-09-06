import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const line2CredentialJsonSchema = Type.Object(
  {
    line2: Type.Optional(
      Type.String({
        description: 'The second line of the address.',
        examples: ['Apt #4', 'Suite 200'],
        title: 'Address Line 2',
        displayFormat: DisplayFormat.String,
        input: {
          type: InputType.Text
        }
      })
    )
  },
  {
    $id: 'Line2Credential'
  }
);

export type Line2CredentialJsonSchema = Static<typeof line2CredentialJsonSchema>;
