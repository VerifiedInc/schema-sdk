import { Type } from '../../type';
import { UnumJsonSchema } from '..';
import { DisplayFormat } from '../../enums/displayFormat';

export const countryResidenceCredentialJsonSchema = Type.Object(
  {
    country: Type.String({
      format: 'iso3361Alpha2',
      description: "A person's country of residence in ISO 3166-1 alpha-2 format.",
      examples: ['US', 'CA', 'MX'],
      title: 'Country',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'CountryResidenceCredential' }
) as UnumJsonSchema;
