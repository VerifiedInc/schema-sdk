import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const firstNameCredentialJsonSchema = Type.Object(
  {
    firstName: Type.String({
      description: "A person's first name",
      examples: ['John', 'Mary Kate'],
      title: 'First Name'
    })
  },
  { $id: 'FirstNameCredential' }
) as UnumJsonSchema;
