import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const firstNameCredentialJsonSchema = Type.Object(
  {
    firstName: Type.String({
      description: "A person's first name",
      examples: ['John', 'Mary Kate'],
      title: 'First Name',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'FirstNameCredential' }
) as UnumJsonSchema;
