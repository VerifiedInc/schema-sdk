import { Type } from '../../type';
import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { sexes } from '../../values';
import { InputType } from '../../enums/inputType';

export const sexCredentialJsonSchema = Type.Object(
  {
    sex: Type.String({
      format: 'gender',
      description: "A person's sex",
      examples: ['Male', 'Female'],
      title: 'Sex',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Select,
        options: Array.from(sexes)
      }
    })
  },
  { $id: 'SexCredential' }
);

export type SexCredentialJsonSchema = Static<typeof sexCredentialJsonSchema>;
