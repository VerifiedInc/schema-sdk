import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';

export const genderCredentialJsonSchema = Type.Object(
  {
    gender: Type.String({
      format: 'gender',
      description: "A person's gender",
      examples: ['Male', 'Female', 'Other', 'Non-Binary']
    })
  },
  { $id: 'GenderCredential', additionalProperties: false }
) as UnumJsonSchema;
