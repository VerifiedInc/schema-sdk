import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const countryCredentialJsonSchema = Type.Object(
  {
    country: Type.String({
      format: 'iso3361Alpha2',
      examples: ['US', 'CA', 'MX'],
      description: "A country's ISO 3166-1 alpha-2 code.",
      label: 'Country',
      grouping: 'Address'
    })
  },
  { $id: 'CountryCredential' }
) as UnumJsonSchema;
