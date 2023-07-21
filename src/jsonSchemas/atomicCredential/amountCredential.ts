import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';

export const amountCredentialJsonSchema = Type.Object(
  {
    amount: Type.String({
      description: 'The amount of the currency.',
      examples: ['100000', '200000', '300000'],
      format: 'digits'
    })
  },
  {
    $id: 'AmountCredential'
  }
) as UnumJsonSchema;
