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
    Type.Union([
      employerNameCredentialJsonSchema,
      employmentStartDateCredentialJsonSchema,
      titleCredentialJsonSchema,
      incomeRangeCredentialJsonSchema,
      annualIncomeCredentialJsonSchema
    ])
  ],
  {
    $id: 'EmployerCredential',
    unevaluatedProperties: false
  }
);

export type EmployerCredentialJsonSchemaType = Static<typeof employerCredentialJsonSchema>;
