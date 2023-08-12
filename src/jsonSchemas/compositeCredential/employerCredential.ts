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
      employmentStartDateCredentialJsonSchema,
      titleCredentialJsonSchema,
      incomeRangeCredentialJsonSchema,
      annualIncomeCredentialJsonSchema,
      employerNameCredentialJsonSchema
    ]),
    Type.Object(
      {
        employer: Type.String({
          description: 'Employer name',
          examples: ['Acme Corp', 'Piped Piper', 'Hooli'],
          title: 'Employer',
          displayFormat: DisplayFormat.String
        })
      },
      {
        additionalProperties: false
      }
    )
  ],
  {
    unevaluatedProperties: false,
    $id: 'EmployerCredential'
  }
);

export type EmployerCredentialJsonSchemaType = Static<typeof employerCredentialJsonSchema>;
