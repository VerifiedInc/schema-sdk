import { UnumJsonLDSchema } from '../../jsonLDSchemas';

export const stateCredentialJsonLDSchema: UnumJsonLDSchema = {
  '@type': 'StateCredential',
  country: 'schema:addressState',
  '@context': 'https://schema.verified.inc'
};
