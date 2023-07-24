import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const documentTypeCredentialJsonSchema = Type.Object(
  {
    documentType: Type.String({
      format: 'documentType',
      description: "A person's government identification document type",
      examples: [
        'Drivers License',
        'Passport',
        'State ID',
        'Military ID',
        'National ID',
        'Birth Certificate',
        'Voter Registration Card',
        'Other'
      ]
    })
  },
  { $id: 'DocumentTypeCredential', additionalProperties: false }
) as UnumJsonSchema;
