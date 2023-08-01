import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const emailCredentialJsonSchema = Type.Object(
  {
    email: Type.String({
      format: 'email',
      description: 'Standard, valid email address format.',
      examples: ['test@verified.inc', 'you+me@piedpiper.net'],
      title: 'Email'
    })
  },
  { $id: 'EmailCredential' }
) as UnumJsonSchema;
