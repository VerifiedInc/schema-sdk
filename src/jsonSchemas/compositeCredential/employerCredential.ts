import { Type } from '../../type';
import { annualIncomeCredentialJsonSchema } from './annualIncomeCredential';
import { employmentStartDateCredentialJsonSchema } from '../employerCredential/employmentStartDateCredential';
import { titleCredentialJsonSchema } from '../employerCredential/titleCredential';
import { incomeRangeCredentialJsonSchema } from '../employerCredential/incomeRangeCredential';
import { UnumJsonSchema } from '..';

export const employerCredentialJsonSchema = Type.Intersect(
  [
    employmentStartDateCredentialJsonSchema,
    titleCredentialJsonSchema,
    incomeRangeCredentialJsonSchema,
    annualIncomeCredentialJsonSchema
  ],
  {
    unevaluatedProperties: false,
    $id: 'EmployerCredential',
    properties: Type.Object({
      employer: Type.String({
        description: 'Employer name',
        examples: ['Acme Corp', 'Piped Piper', 'Hooli']
      })
    })
  }
) as unknown as UnumJsonSchema;
