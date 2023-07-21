import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';

export const annualIncomeCredentialJsonSchema = Type.Object(
  {
    income: Type.String({
      format: 'iso4217Amount',
      description: 'Annual income with the preceding ISO4217 currency format.',
      examples: ['USD 101000', 'GBP 46000']
    })
  },
  { $id: 'AnnualIncomeCredential', additionalProperties: false }
) as UnumJsonSchema;
