import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';

export const lastNameCredentialJsonSchema = Type.Object(
  {
    lastName: Type.String({
      description: "A person's last name",
      examples: ['Smith', 'Garcia-Tony']
    })
  },
  { $id: 'LastNameCredential', additionalProperties: false }
) as UnumJsonSchema;
