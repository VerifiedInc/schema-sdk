import { Type } from '../../type';
import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { InputType } from '../../enums/inputType';

export const emailCredentialJsonSchema = Type.Object(
  {
    email: Type.String({
      format: 'email',
      description: 'Standard, valid email address format.',
      examples: ['test@verified.inc', 'you+me@piedpiper.net'],
      title: 'Email',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Email
      }
    })
  },
  { $id: 'EmailCredential' }
);

export type EmailCredentialJsonSchema = Static<typeof emailCredentialJsonSchema>;
