import { UnumJsonLDSchema } from '../../jsonLDSchemas';

export const countryCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'CountryCredential',
  country: 'schema:addressCountry',
  '@context': 'https://schema.verified.inc'
};
