import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const currencyCredentialJsonSchema = Type.Object(
  {
    currency: Type.String({
      description: 'The currency of the amount.',
      examples: ['USD', 'EUR', 'GBP'],
      format: 'iso4217Format'
    })
  },
  {
    $id: 'CurrencyCredential'
  }
) as UnumJsonSchema;
