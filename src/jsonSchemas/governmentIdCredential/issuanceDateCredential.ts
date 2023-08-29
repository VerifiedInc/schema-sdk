import { Type } from '../../type';

import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const issuanceDateCredentialJsonSchema = Type.Object(
  {
    issuanceDate: Type.String({
      format: 'unixMsEpochDayFormat',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch, which equates to 12:00:00:000 UTC of the date',
      examples: ['631195200000', '-331560000000'],
      title: 'Issuance Date',
      displayFormat: DisplayFormat.Date,
      input: {
        type: InputType.Date
      }
    })
  },
  { $id: 'IssuanceDateCredential' }
);

export type IssuanceDateCredentialJsonSchema = Static<typeof issuanceDateCredentialJsonSchema>;
