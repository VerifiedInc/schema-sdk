import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';

export const firstNameCredentialJsonSchema = Type.Object(
  {
    firstName: Type.String({
      description: "A person's first name",
      examples: ['John', 'Mary Kate']
    })
  },
  { $id: 'FirstNameCredential', additionalProperties: false }
) as UnumJsonSchema;
