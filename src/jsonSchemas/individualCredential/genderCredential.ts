import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const genderCredentialJsonSchema = Type.Object(
  {
    gender: Type.String({
      format: 'gender',
      description: "A person's gender",
      examples: ['Male', 'Female', 'Other', 'Non-Binary'],
      title: 'Gender'
    })
  },
  { $id: 'GenderCredential' }
) as UnumJsonSchema;
