import { TObject, TProperties, Type } from '@sinclair/typebox';

/**
 * Interface to assist with typings of the UnumID schema definitions, which will always have $id defined.
 */
interface UnumJsonSchema extends TObject<TProperties> {
  $id: string; // UnumID schema definitions will always have a valid $id property
}

export const governmentIdDocumentImageCredentialJsonSchema = Type.Object(
  {
    image: Type.String({
      format: 'dataUriBase64Image',
      description:
        'Base64 encoded government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
      examples: [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
      ],
      title: 'Government Document Image'
    })
  },
  { $id: 'GovernmentIdDocumentImageCredential' }
) as UnumJsonSchema;

export const governmentIdTypeCredentialJsonSchema = Type.Object(
  {
    documentType: Type.String({
      format: 'documentType',
      description: "A person's government identification document type",
      examples: [
        'Drivers License',
        'Passport',
        'State ID',
        'Military ID',
        'National ID',
        'Birth Certificate',
        'Voter Registration Card',
        'Other'
      ],
      title: 'Government Document Type'
    })
  },
  { $id: 'GovernmentIdTypeCredential' }
) as UnumJsonSchema;

export const governmentIdDocumentBackImageCredentialJsonSchema = Type.Object(
  {
    image: Type.String({
      format: 'dataUriBase64Image',
      description:
        'Base64 encoded back of government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
      examples: [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
      ],
      title: 'Government Document Back Image'
    })
  },
  {
    $id: 'GovernmentIdDocumentBackImageCredential'
  }
) as UnumJsonSchema;

export const governmentIdStateCredentialJsonSchema = Type.Object(
  {
    state: Type.String({
      format: 'iso3166',
      description: 'The state or province of the government identification document',
      examples: ['US-CA', 'US-NY', 'US-TX', 'GB-ENG'],
      title: 'Government Document Region'
    })
  },
  { $id: 'GovernmentIdStateCredential' }
) as UnumJsonSchema;

export const governmentIdNumberCredentialJsonSchema = Type.Object(
  {
    idNumber: Type.String({
      description: 'Government identification document number. Note, it can be alphanumeric.',
      examples: ['801322-1117621', 'F4698E1'],
      title: 'Government Document ID'
    })
  },
  { $id: 'GovernmentIdNumberCredential' }
) as UnumJsonSchema;

export const governmentIdIssuanceDateCredentialJsonSchema = Type.Object(
  {
    issuanceDate: Type.String({
      format: 'digits',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
      examples: ['1687488596000', '-45709'],
      title: 'Government Document Issuance Date'
    })
  },
  { $id: 'GovernmentIdIssuanceDateCredential' }
) as UnumJsonSchema;

export const governmentIdExpirationDateCredentialJsonSchema = Type.Object(
  {
    expirationDate: Type.String({
      format: 'digits',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
      examples: ['1687488596000', '-45709'],
      title: 'Government Document Expiration Date'
    })
  },
  { $id: 'GovernmentIdExpirationDateCredential' }
) as UnumJsonSchema;

export const incomeCurrencyCredentialJsonSchema = Type.Object(
  {
    currency: Type.String({
      format: 'iso4217',
      description: 'ISO4217 currency format.',
      examples: ['USD', 'GBP', 'EUR'],
      title: 'Income Currency'
    })
  },
  { $id: 'IncomeCurrencyCredential' }
) as UnumJsonSchema;

export const annualIncomeRangeCredentialJsonSchema = Type.Object(
  {
    income: Type.String({
      format: 'iso4217AmountRange',
      description:
        'Annual income range with the preceding ISO4217 currency code followed by min<value>_max<value>.',
      examples: ['USD min100000_max200000', 'GBP min40000_max50000'],
      title: 'Annual Income Range'
    })
  },
  { $id: 'AnnualIncomeRangeCredential' }
) as UnumJsonSchema;
