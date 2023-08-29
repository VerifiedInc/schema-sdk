import { Type } from '../../type';
import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { genders } from '../../values';
import { InputType } from '../../enums/inputType';

export const genderCredentialJsonSchema = Type.Object(
  {
    gender: Type.String({
      format: 'gender',
      description: "A person's gender",
      examples: ['Male', 'Female', 'Other', 'Non-Binary'],
      title: 'Gender',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Select,
        options: Array.from(genders)
      }
    })
  },
  { $id: 'GenderCredential' }
);

export type GenderCredentialJsonSchema = Static<typeof genderCredentialJsonSchema>;
