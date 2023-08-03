import { Type } from '../../type';
import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const sexCredentialJsonSchema = Type.Object(
  {
    sex: Type.String({
      format: 'gender',
      description: "A person's sex",
      examples: ['Male', 'Female'],
      title: 'Sex',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'SexCredential' }
);

export type SexCredentialJsonSchema = Static<typeof sexCredentialJsonSchema>;
