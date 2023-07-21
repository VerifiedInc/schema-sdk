import { Type } from '@sinclair/typebox';
import { UnumJsonSchema } from '..';

export const numberCredentialJsonSchema = Type.Object(
  {
    idNumber: Type.String({
      description: 'Government identification document number. Note, it can be alphanumeric.',
      examples: ['801322-1117621', 'F4698E1']
    })
  },
  { $id: 'NumberCredential', additionalProperties: false }
) as UnumJsonSchema;
