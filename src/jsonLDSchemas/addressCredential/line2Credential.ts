import { UnumJsonLDSchema } from '../../jsonLDSchemas';

export const line2CredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'Line2Credential',
  country: 'schema:streetAddress',
  '@context': 'https://schema.verified.inc'
};
