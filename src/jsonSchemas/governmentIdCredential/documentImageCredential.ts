import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const documentImageCredentialJsonSchema = Type.Object(
  {
    image: Type.String({
      format: 'dataUriBase64Image',
      description:
        'Base64 encoded government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
      examples: [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
      ]
    })
  },
  { $id: 'documentImageCredential', additionalProperties: false }
) as UnumJsonSchema;
