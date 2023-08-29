import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const amountCredentialJsonSchema = Type.Object(
  {
    amount: Type.String({
      description: 'The amount of the something, i.e. a currency.',
      examples: ['100000', '200000', '300000'],
      title: 'Amount',
      format: 'digits',
      displayFormat: DisplayFormat.Number,
      input: {
        type: InputType.Text,
        pattern: '^-?\\d+$' // digits only, allowing leading minus sign for negative numbers
      }
    })
  },
  {
    $id: 'AmountCredential'
  }
);

export type AmountCredentialJsonSchema = Static<typeof amountCredentialJsonSchema>;
