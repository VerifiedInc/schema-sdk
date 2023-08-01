import { Type } from '../../type';
import { annualIncomeCredentialJsonSchema } from './annualIncomeCredential';
import { employmentStartDateCredentialJsonSchema } from '../employerCredential/employmentStartDateCredential';
import { titleCredentialJsonSchema } from '../employerCredential/titleCredential';
import { incomeRangeCredentialJsonSchema } from '../employerCredential/incomeRangeCredential';
import { UnumJsonSchema } from '..';

export const employerCredentialJsonSchema = Type.Union(
  [
    Type.IntersectReferences([
      employmentStartDateCredentialJsonSchema,
      titleCredentialJsonSchema,
      incomeRangeCredentialJsonSchema,
      annualIncomeCredentialJsonSchema
    ]),
    Type.Object({
      employer: Type.String({
        description: 'Employer name',
        examples: ['Acme Corp', 'Piped Piper', 'Hooli'],
        title: 'Employer'
      })
    })
  ],
  {
    unevaluatedProperties: false,
    $id: 'EmployerCredential'
  }
) as unknown as UnumJsonSchema;
