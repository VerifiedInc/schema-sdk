import { Static, Type } from '@sinclair/typebox';
import { DisplayFormat } from '../../enums/displayFormat';
import { InputType } from '../../enums/inputType';
import { ISO31662USCodes, currencySelectOptions, documentTypes, incomeRangeOptions } from '../../values';

/*******************************************************
 * Old credentials that we use, but will be deprecated *
 *******************************************************/

export const governmentIdDocumentImageCredentialJsonSchema = Type.Object(
  {
    image: Type.String({
      format: 'dataUriBase64Image',
      description:
        'Base64 encoded government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
      examples: [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
      ],
      title: 'Government Document Image',
      displayFormat: DisplayFormat.Image,
      input: {
        type: InputType.Image
      }
    })
  },
  { $id: 'GovernmentIdDocumentImageCredential' }
);
export type GovernmentIdDocumentImageCredentialJsonSchema = Static<
  typeof governmentIdDocumentImageCredentialJsonSchema
>;

export const governmentIdDocumentBackImageCredentialJsonSchema = Type.Object(
  {
    image: Type.String({
      format: 'dataUriBase64Image',
      description:
        'Base64 encoded back of government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
      examples: [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
      ],
      title: 'Government Document Back Image',
      displayFormat: DisplayFormat.Image,
      input: {
        type: InputType.Image
      }
    })
  },
  {
    $id: 'GovernmentIdDocumentBackImageCredential'
  }
);
export type GovernmentIdDocumentBackImageCredentialJsonSchema = Static<
  typeof governmentIdDocumentBackImageCredentialJsonSchema
>;

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
      title: 'Government Document Type',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Select,
        options: Array.from(documentTypes)
      }
    })
  },
  { $id: 'GovernmentIdTypeCredential' }
);
export type GovernmentIdTypeCredentialJsonSchema = Static<typeof governmentIdTypeCredentialJsonSchema>;

export const governmentIdStateCredentialJsonSchema = Type.Object(
  {
    state: Type.String({
      format: 'iso3166',
      description: 'The state or province of the government identification document',
      examples: ['US-CA', 'US-NY', 'US-TX', 'GB-ENG'],
      title: 'Government Document Region',
      displayFormat: DisplayFormat.State,
      input: {
        type: InputType.Select,
        options: Array.from(ISO31662USCodes)
      }
    })
  },
  { $id: 'GovernmentIdStateCredential' }
);
export type GovernmentIdStateCredentialJsonSchema = Static<typeof governmentIdStateCredentialJsonSchema>;

export const governmentIdNumberCredentialJsonSchema = Type.Object(
  {
    idNumber: Type.String({
      description: 'Government identification document number. Note, it can be alphanumeric.',
      examples: ['801322-1117621', 'F4698E1'],
      title: 'Government Document ID',
      displayFormat: DisplayFormat.String
    })
  },
  { $id: 'GovernmentIdNumberCredential' }
);
export type GovernmentIdNumberCredentialJsonSchema = Static<typeof governmentIdNumberCredentialJsonSchema>;

export const governmentIdIssuanceDateCredentialJsonSchema = Type.Object(
  {
    issuanceDate: Type.String({
      format: 'unixMsEpochDayFormat',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch, which equates to 12:00:00:000 UTC of the date',
      examples: ['631195200000', '-331560000000'],
      title: 'Government Document Issuance Date',
      displayFormat: DisplayFormat.Date,
      input: {
        type: InputType.Date
      }
    })
  },
  { $id: 'GovernmentIdIssuanceDateCredential' }
);
export type GovernmentIdIssuanceDateCredentialJsonSchema = Static<
  typeof governmentIdIssuanceDateCredentialJsonSchema
>;

export const governmentIdExpirationDateCredentialJsonSchema = Type.Object(
  {
    expirationDate: Type.String({
      format: 'unixMsEpochDayFormat',
      description:
        'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch, which equates to 12:00:00:000 UTC of the date',
      examples: ['631195200000', '-331560000000'],
      title: 'Government Document Expiration Date',
      displayFormat: DisplayFormat.Date,
      input: {
        type: InputType.Date
      }
    })
  },
  { $id: 'GovernmentIdExpirationDateCredential' }
);
export type GovernmentIdExpirationDateCredentialJsonSchema = Static<
  typeof governmentIdExpirationDateCredentialJsonSchema
>;

export const incomeCurrencyCredentialJsonSchema = Type.Object(
  {
    currency: Type.String({
      format: 'iso4217',
      description: 'ISO4217 currency format.',
      examples: ['USD', 'GBP', 'EUR'],
      title: 'Income Currency',
      displayFormat: DisplayFormat.String,
      input: {
        type: InputType.Select,
        options: currencySelectOptions
      }
    })
  },
  { $id: 'IncomeCurrencyCredential' }
);
export type IncomeCurrencyCredentialJsonSchema = Static<typeof incomeCurrencyCredentialJsonSchema>;

export const annualIncomeRangeCredentialJsonSchema = Type.Object(
  {
    income: Type.String({
      format: 'iso4217AmountRange',
      description:
        'Annual income range with the preceding ISO4217 currency code followed by min<value>_max<value>.',
      examples: ['USD min100000_max200000', 'GBP min40000_max50000'],
      title: 'Annual Income Range',
      displayFormat: DisplayFormat.CurrencyRange,
      input: {
        type: InputType.Select,
        options: incomeRangeOptions
      }
    })
  },
  { $id: 'AnnualIncomeRangeCredential' }
);
export type AnnualIncomeRangeCredentialJsonSchema = Static<typeof annualIncomeRangeCredentialJsonSchema>;
