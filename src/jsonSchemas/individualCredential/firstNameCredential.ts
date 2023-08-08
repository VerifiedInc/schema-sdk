import { Type } from '../../type';
import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

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
);

export type FirstNameCredentialJsonSchema = Static<typeof firstNameCredentialJsonSchema>;
