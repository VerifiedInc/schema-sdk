import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';

export const stateCredentialJsonSchema = Type.Object(
  {
    state: Type.String({
      description: 'The state of the address.',
      examples: ['CA', 'GA', 'NY']
    })
  },
  {
    $id: 'StateCredential'
  }
) as UnumJsonSchema;
