import { Type } from '../../type';
import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const ssnCredentialJsonSchema = Type.Object(
  {
    ssn: Type.String({
      format: 'ssn',
      description: '9 digit social security number, with no dashes, in the format of: 123456789',
      examples: ['123456789', '333224444'],
      title: 'Social Security Number',
      displayFormat: DisplayFormat.SSN,
      input: {
        type: InputType.SSN
      }
    })
  },
  { $id: 'SsnCredential' }
);

export type SsnCredentialJsonSchema = Static<typeof ssnCredentialJsonSchema>;
