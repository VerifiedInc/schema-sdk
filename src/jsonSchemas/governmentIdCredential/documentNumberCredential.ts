import { Type } from '../../type';
import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';

export const documentNumberCredentialJsonSchema = Type.Object(
  {
    idNumber: Type.String({
      description: 'Government identification document number. Note, it can be alphanumeric.',
      examples: ['801322-1117621', 'F4698E1'],
      title: 'Document ID',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'DocumentNumberCredential' }
);

export type DocumentNumberCredentialJsonSchema = Static<typeof documentNumberCredentialJsonSchema>;
