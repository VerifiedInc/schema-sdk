import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';

export const sexCredentialJsonSchema = Type.Object(
  {
    sex: Type.String({
      format: 'gender',
      description: "A person's sex",
      examples: ['Male', 'Female']
    })
  },
  { $id: 'SexCredential', additionalProperties: false }
) as UnumJsonSchema;
