import { Type } from '../../type';
import { currencyCredentialJsonSchema } from '../atomicCredential/currencyCredential';
import { amountCredentialJsonSchema } from '../atomicCredential/amountCredential';
import { UnumJsonSchema } from '..';

export const annualIncomeCredentialJsonSchema = Type.Union(
  [
    Type.Intersect([currencyCredentialJsonSchema, amountCredentialJsonSchema]),
    // Allow backward compatibility with the old format
    Type.Object(
      {
        income: Type.String({
          format: 'iso4217Amount',
          description: 'Annual income with the preceding ISO4217 currency format.',
          examples: ['USD 101000', 'GBP 46000']
        })
      },
      { additionalProperties: false }
    )
  ],
  {
    $id: 'AnnualIncomeCredential',
    unevaluatedProperties: false
  }
) as unknown as UnumJsonSchema;
