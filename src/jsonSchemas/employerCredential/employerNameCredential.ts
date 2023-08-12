import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const employerNameCredentialJsonSchema = Type.Object(
  {
    employer: Type.String({
      description: 'Employer name',
      examples: ['Acme Corp', 'Piped Piper', 'Hooli'],
      title: 'Employer',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'EmployerNameCredential' }
);

export type EmployerNameCredentialJsonSchema = Static<typeof employerNameCredentialJsonSchema>;
