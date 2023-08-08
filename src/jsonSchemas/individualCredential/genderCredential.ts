import { Type } from '../../type';
import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const genderCredentialJsonSchema = Type.Object(
  {
    gender: Type.String({
      format: 'gender',
      description: "A person's gender",
      examples: ['Male', 'Female', 'Other', 'Non-Binary'],
      title: 'Gender',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'GenderCredential' }
);

export type GenderCredentialJsonSchema = Static<typeof genderCredentialJsonSchema>;
