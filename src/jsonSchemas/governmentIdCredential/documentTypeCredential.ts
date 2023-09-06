import { Type } from '../../type';
import { DisplayFormat } from '../../enums/displayFormat';
import { Static } from '@sinclair/typebox';
import { documentTypes } from '../../values';
import { InputType } from '../../enums/inputType';

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
      ],
      title: 'Document Type',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Select,
        options: Array.from(documentTypes)
      }
    })
  },
  { $id: 'DocumentTypeCredential' }
);

export type DocumentTypeCredentialJsonSchema = Static<typeof documentTypeCredentialJsonSchema>;
