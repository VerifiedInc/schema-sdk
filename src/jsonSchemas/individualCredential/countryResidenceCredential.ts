import { Type } from '../../type';
import { UnumJsonSchema } from '..';

export const countryResidenceCredentialJsonSchema = Type.Object(
  {
    country: Type.String({
      format: 'iso3361Alpha2',
      description: "A person's country of residence in ISO 3166-1 alpha-2 format.",
      examples: ['US', 'CA', 'MX']
    })
  },
  { $id: 'CountryResidenceCredential', additionalProperties: false }
) as UnumJsonSchema;
