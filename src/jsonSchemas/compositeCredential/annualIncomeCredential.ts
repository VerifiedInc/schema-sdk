import { Type } from '../../type';
import { currencyCredentialJsonSchema } from '../atomicCredential/currencyCredential';
import { amountCredentialJsonSchema } from '../atomicCredential/amountCredential';
import { UnumJsonSchema } from '..';

export const annualIncomeCredentialJsonSchema = Type.Union(
  [
    Type.IntersectReferences([currencyCredentialJsonSchema, amountCredentialJsonSchema]),
    // Allow backward compatibility with the old format
    Type.Object({
      income: Type.String({
        format: 'iso4217Amount',
        description: 'Annual income with the preceding ISO4217 currency format.',
        examples: ['USD 101000', 'GBP 46000'],
        title: 'Annual Income'
      })
    })
  ],
  {
    $id: 'AnnualIncomeCredential',
    unevaluatedProperties: false,
    // Allow backward compatibility with the old format
    if: Type.Object(
      {
        income: Type.String()
      },
      {
        additionalProperties: false
      }
    ),
    then: Type.Object({
      income: Type.String({
        format: 'iso4217Amount'
      })
    })
  }
) as unknown as UnumJsonSchema;
