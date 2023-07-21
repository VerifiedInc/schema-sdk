import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';
import { annualIncomeCredentialJsonSchema } from '../employerCredential/annualIncomeCredential';
import { employmentStartDateCredentialJsonSchema } from '../../jsonSchemas';

export const employerCredentialJsonSchema = Type.Composite(
  [annualIncomeCredentialJsonSchema, employmentStartDateCredentialJsonSchema],
  {
    $id: 'EmployerCredential',
    additionalProperties: false
  }
) as UnumJsonSchema;
