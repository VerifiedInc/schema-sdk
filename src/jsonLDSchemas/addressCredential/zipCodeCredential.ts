import { UnumJsonLDSchema } from '../../jsonLDSchemas';

export const zipCodeCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'ZipCodeCredential',
  country: 'schema:postalCode',
  '@context': 'https://schema.verified.inc'
};
