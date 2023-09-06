import { Type } from '../../type';
import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const firstNameCredentialJsonSchema = Type.Object(
  {
    firstName: Type.String({
      description: "A person's first name",
      examples: ['John', 'Mary Kate'],
      title: 'First Name',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Text
      }
    })
  },
  { $id: 'FirstNameCredential' }
);

export type FirstNameCredentialJsonSchema = Static<typeof firstNameCredentialJsonSchema>;
