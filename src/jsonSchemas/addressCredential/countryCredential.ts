import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const countryCredentialJsonSchema = Type.Object(
  {
    country: Type.String({
      format: 'iso3361Alpha2',
      examples: ['US', 'CA', 'MX'],
      description: "A country's ISO 3166-1 alpha-2 code.",
      title: 'Country',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'CountryCredential', grouping: 'Address' }
) as UnumJsonSchema;
