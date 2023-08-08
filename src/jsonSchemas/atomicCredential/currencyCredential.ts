import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const currencyCredentialJsonSchema = Type.Object(
  {
    currency: Type.String({
      description: 'The iso4217 currency code',
      examples: ['USD', 'EUR', 'GBP'],
      title: 'Currency',
      format: 'iso4217',
      displayFormat: DisplayFormat.String
    })
  },
  {
    $id: 'CurrencyCredential'
  }
);

export type CurrencyCredentialJsonSchema = Static<typeof currencyCredentialJsonSchema>;
