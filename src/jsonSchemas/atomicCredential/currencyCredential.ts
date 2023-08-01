import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

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
) as UnumJsonSchema;
