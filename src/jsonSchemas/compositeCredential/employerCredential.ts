import { Type } from '../../type';
import { annualIncomeCredentialJsonSchema } from './annualIncomeCredential';
import { employmentStartDateCredentialJsonSchema } from '../employerCredential/employmentStartDateCredential';
import { titleCredentialJsonSchema } from '../employerCredential/titleCredential';
import { incomeRangeCredentialJsonSchema } from '../employerCredential/incomeRangeCredential';
import { employerNameCredentialJsonSchema } from '../employerCredential/employerNameCredential';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const employerCredentialJsonSchema = Type.Union(
  [
    Type.IntersectReferences([
      Type.Optional(employerNameCredentialJsonSchema),
      Type.Optional(employmentStartDateCredentialJsonSchema),
      Type.Optional(titleCredentialJsonSchema),
      Type.Optional(incomeRangeCredentialJsonSchema),
      Type.Optional(annualIncomeCredentialJsonSchema)
    ]),
    Type.Object({
      employer: Type.String({
        description: 'Employer Name',
        examples: ['Acme Corp', 'Piped Piper', 'Hooli'],
        title: 'Employer',
        displayFormat: DisplayFormat.String
      })
    })
  ],
  {
    $id: 'EmployerCredential',
    unevaluatedProperties: false
  }
);

export type EmployerCredentialJsonSchemaType = Static<typeof employerCredentialJsonSchema>;
