import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { currencySelectOptions } from '../../values';
import { InputType } from '../../enums/inputType';

export const currencyCredentialJsonSchema = Type.Object(
  {
    currency: Type.String({
      description: 'The iso4217 currency code',
      examples: ['USD', 'EUR', 'GBP'],
      title: 'Currency',
      format: 'iso4217',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Select,
        options: currencySelectOptions,
        default: 'USD'
      }
    })
  },
  {
    $id: 'CurrencyCredential'
  }
);

export type CurrencyCredentialJsonSchema = Static<typeof currencyCredentialJsonSchema>;
