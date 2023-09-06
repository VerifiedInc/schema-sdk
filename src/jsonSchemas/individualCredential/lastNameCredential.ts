import { Type } from '../../type';
import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const lastNameCredentialJsonSchema = Type.Object(
  {
    lastName: Type.String({
      description: "A person's last name",
      examples: ['Smith', 'Garcia-Tony'],
      title: 'Last Name',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Text
      }
    })
  },
  { $id: 'LastNameCredential' }
);

export type LastNameCredentialJsonSchema = Static<typeof lastNameCredentialJsonSchema>;
