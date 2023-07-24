import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const documentNumberCredentialJsonSchema = Type.Object(
  {
    idNumber: Type.String({
      description: 'Government identification document number. Note, it can be alphanumeric.',
      examples: ['801322-1117621', 'F4698E1']
    })
  },
  { $id: 'DocumentNumberCredential', additionalProperties: false }
) as UnumJsonSchema;
