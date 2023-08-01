import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const incomeRangeCredentialJsonSchema = Type.Object(
  {
    incomeRange: Type.String({
      format: 'iso4217AmountRange',
      description:
        'Annual income range with the preceding ISO4217 currency code followed by min<value>_max<value>.',
      examples: ['USD min100000_max200000', 'GBP min40000_max50000'],
      title: 'Income Range',
      displayFormat: DisplayFormat.CurrencyRange
    })
  },
  { $id: 'IncomeRangeCredential' }
) as UnumJsonSchema;
