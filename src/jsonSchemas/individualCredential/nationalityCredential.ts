import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const nationalityCredentialJsonSchema = Type.Object(
  {
    nationality: Type.String({
      format: 'iso3361Alpha2',
      description: "A person's birth country or country of citizenship in ISO 3166-1 alpha-2 format.",
      examples: ['US', 'CA', 'MX'],
      title: 'Nationality'
    })
  },
  { $id: 'NationalityCredential' }
) as UnumJsonSchema;
