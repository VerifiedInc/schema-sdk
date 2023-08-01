import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const amountCredentialJsonSchema = Type.Object(
  {
    amount: Type.String({
      description: 'The amount of the something, i.e. a currency.',
      examples: ['100000', '200000', '300000'],
      title: 'Amount',
      format: 'digits',
      displayFormat: DisplayFormat.Number
    })
  },
  {
    $id: 'AmountCredential'
  }
) as UnumJsonSchema;
