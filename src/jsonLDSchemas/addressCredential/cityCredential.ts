import { UnumJsonLDSchema } from '../../jsonLDSchemas';

export const cityCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'CityCredential',
  country: 'schema:addressCity',
  '@context': 'https://schema.verified.inc'
};
