import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';

export const emailCredentialJsonSchema = Type.Object(
  {
    email: Type.String({
      format: 'email',
      description: 'Standard, valid email address format.',
      examples: ['test@verified.inc', 'you+me@piedpiper.net']
    })
  },
  { $id: 'EmailCredential', additionalProperties: false }
) as UnumJsonSchema;
