import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const expirationDateCredentialJsonSchema = Type.Object(
  {
    expirationDate: Type.String({
      format: 'unixMsEpochDayFormat',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch, , which is the 12th hour of the expiration day UTC, GMT+0000',
      examples: ['631195200000', '-331560000000'],
      title: 'Expiration Date',
      displayFormat: DisplayFormat.Date
    })
  },
  { $id: 'ExpirationDateCredential' }
) as UnumJsonSchema;
