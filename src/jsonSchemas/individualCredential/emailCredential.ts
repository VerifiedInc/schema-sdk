import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const emailCredentialJsonSchema = Type.Object(
  {
    email: Type.String({
      format: 'email',
      description: 'Standard, valid email address format.',
      examples: ['test@verified.inc', 'you+me@piedpiper.net'],
      title: 'Email',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'EmailCredential' }
) as UnumJsonSchema;
