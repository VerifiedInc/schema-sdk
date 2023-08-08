import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

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
);

export type AmountCredentialJsonSchema = Static<typeof amountCredentialJsonSchema>;
