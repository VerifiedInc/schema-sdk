import { Type } from '../../type';
import { currencyCredentialJsonSchema } from '../atomicCredential/currencyCredential';
import { amountCredentialJsonSchema } from '../atomicCredential/amountCredential';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const annualIncomeCredentialJsonSchema = Type.Union(
  [
    Type.IntersectReferences([currencyCredentialJsonSchema, amountCredentialJsonSchema]),
    // Allow backward compatibility with the old format
    Type.Object(
      {
        income: Type.String({
          format: 'iso4217Amount',
          description: 'Annual income with the preceding ISO4217 currency format.',
          examples: ['USD 101000', 'GBP 46000'],
          title: 'Annual Income',
          displayFormat: DisplayFormat.CurrencyAmount
        })
      },
      {
        additionalProperties: true
      }
    )
  ],
  {
    $id: 'AnnualIncomeCredential',
    unevaluatedProperties: false,
    errorMessage: {
      unevaluatedProperties: "AnnualIncomeCredential doesn't match the schema"
    },
    // Allow backward compatibility with the old format
    // ?? What old format? Pretty sure it has always been iso4217Amount
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
);

export type AnnualIncomeCredentialJsonSchemaType = Static<typeof annualIncomeCredentialJsonSchema>;
