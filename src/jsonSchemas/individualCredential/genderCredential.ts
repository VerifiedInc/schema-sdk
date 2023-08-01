import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

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
) as UnumJsonSchema;
