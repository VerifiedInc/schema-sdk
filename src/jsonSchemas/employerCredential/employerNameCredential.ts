import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const employerNameCredentialJsonSchema = Type.Object(
  {
    employer: Type.String({
      description: 'Employer name',
      examples: ['Acme Corp', 'Piped Piper', 'Hooli'],
      title: 'Employer',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Text
      }
    })
  },
  { $id: 'EmployerNameCredential' }
);

export type EmployerNameCredentialJsonSchema = Static<typeof employerNameCredentialJsonSchema>;
