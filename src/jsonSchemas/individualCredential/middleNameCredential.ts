import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const middleNameCredentialJsonSchema = Type.Object(
  {
    middleName: Type.Optional(
      Type.String({
        description: "A person's middle name",
        examples: ['Henry', 'Fitzgerald'],
        title: 'Middle Name',
        displayFormat: DisplayFormat.String,
        input: {
          type: InputType.Text
        }
      })
    )
  },
  { $id: 'MiddleNameCredential' }
);

export type MiddleNameCredentialJsonSchema = Static<typeof middleNameCredentialJsonSchema>;
