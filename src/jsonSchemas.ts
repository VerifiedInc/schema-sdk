import { TObject, TProperties, Type } from '@sinclair/typebox';

/**
 * Interface to assist with typings of the UnumID schema definitions, which will always have $id defined.
 */
export interface UnumJsonSchema extends TObject<TProperties> {
  $id: string; // UnumID schema definitions will always have a valid $id property
}

export const emailCredentialJsonSchema = Type.Object(
  {
    email: Type.String({
      format: 'email',
      description: 'Standard, valid email address format.',
      examples: [
        'test@verified.inc',
        'you+me@piedpiper.net'
      ]
    })
  },
  { $id: 'EmailCredential', additionalProperties: false }
) as UnumJsonSchema;

// special credential that is actually empty
export const identityCredentialJsonSchema = Type.Object(
  {},
  { $id: 'IdentityCredential', additionalProperties: false }
) as UnumJsonSchema;

export const sexCredentialJsonSchema = Type.Object(
  {
    sex: Type.String()
  },
  { $id: 'SexCredential', additionalProperties: false }
) as UnumJsonSchema;

export const ssnCredentialJsonSchema = Type.Object(
  {
    ssn: Type.String({
      format: 'ssn',
      description: '9 digit social security number, with no dashes, in the format of: 123456789',
      examples: [
        '123456789',
        '333224444'
      ]
    })
  },
  { $id: 'SsnCredential', additionalProperties: false }
) as UnumJsonSchema;

export const countryResidenceCredentialJsonSchema = Type.Object(
  {
    country: Type.String()
  },
  { $id: 'CountryResidenceCredential', additionalProperties: false }
) as UnumJsonSchema;

export const nationalityCredentialJsonSchema = Type.Object(
  {
    nationality: Type.String()
  },
  { $id: 'NationalityCredential', additionalProperties: false }
) as UnumJsonSchema;

export const facialImageCredentialJsonSchema = Type.Object(
  {
    image: Type.String({
      format: 'dataUriBase64Image',
      description: 'Base64 encoded facial image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
      examples: [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
      ]
    })
  },
  { $id: 'FacialImageCredential', additionalProperties: false }
) as UnumJsonSchema;

export const livelinessCredentialJsonSchema = Type.Object(
  {
    liveness: Type.String()
  },
  { $id: 'LivelinessCredential', additionalProperties: false }
) as UnumJsonSchema;

export const addressCredentialJsonSchema = Type.Object(
  {
    address: Type.String({
      format: 'address',
      description: 'Address in the format of: street, city, iso3166-code postal-code',
      examples: [
        '10 Downing Street, London, GB-ENG SW1A 2AA',
        '307 3rd Ave, Apt #4, San Austin, US-GA 18025-9876'
      ]
    })
  },
  { $id: 'AddressCredential', additionalProperties: false }
) as UnumJsonSchema;

export const lastNameCredentialJsonSchema = Type.Object(
  {
    lastName: Type.String()
  },
  { $id: 'LastNameCredential', additionalProperties: false }
) as UnumJsonSchema;

export const firstNameCredentialJsonSchema = Type.Object(
  {
    firstName: Type.String()
  },
  { $id: 'FirstNameCredential', additionalProperties: false }
) as UnumJsonSchema;

export const birthDateCredentialJsonSchema = Type.Object(
  {
    birthDate: Type.String({
      format: 'digits',
      description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
      examples: [
        '1687488596000',
        '-45709'
      ]
    })
  },
  { $id: 'BirthDateCredential', additionalProperties: false }
) as UnumJsonSchema;

export const phoneCredentialJsonSchema = Type.Object(
  {
    phone: Type.String({
      format: 'phone',
      description: 'A phone number in the E.164 format, [+][country code][number].',
      examples: [
        '+16175551212',
        '+14041238686'
      ]
    })
  },
  { $id: 'PhoneCredential', additionalProperties: false }
) as UnumJsonSchema;

export const fullNameCredentialJsonSchema = Type.Object(
  {
    fullName: Type.String()
  },
  { $id: 'FullNameCredential', additionalProperties: false }
) as UnumJsonSchema;

export const genderCredentialJsonSchema = Type.Object(
  {
    gender: Type.String()
  },
  { $id: 'GenderCredential', additionalProperties: false }
) as UnumJsonSchema;

export const governmentIdDocumentImageCredentialJsonSchema = Type.Object(
  {
    image: Type.String({
      format: 'dataUriBase64Image',
      description: 'Base64 encoded government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
      examples: [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
      ]
    })
  },
  { $id: 'GovernmentIdDocumentImageCredential', additionalProperties: false }
) as UnumJsonSchema;

export const livelinessConfidenceCredentialJsonSchema = Type.Object(
  {
    confidence: Type.String()
  },
  { $id: 'LivelinessConfidenceCredential', additionalProperties: false }
) as UnumJsonSchema;

export const facialMatchCredentialJsonSchema = Type.Object(
  {
    match: Type.String()
  },
  { $id: 'FacialMatchCredential', additionalProperties: false }
) as UnumJsonSchema;

export const facialMatchConfidenceCredentialJsonSchema = Type.Object(
  {
    confidence: Type.String()
  },
  { $id: 'FacialMatchConfidenceCredential', additionalProperties: false }
) as UnumJsonSchema;

export const governmentIdTypeCredentialJsonSchema = Type.Object(
  {
    documentType: Type.String()
  },
  { $id: 'GovernmentIdTypeCredential', additionalProperties: false }
) as UnumJsonSchema;

export const governmentIdDocumentBackImageCredentialJsonSchema = Type.Object(
  {
    image: Type.String({
      format: 'dataUriBase64Image',
      description: 'Base64 encoded back of government identification document image with the Data URI scheme prefix, i.e. data:image/<format>;base64,<encoded-data>',
      examples: [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
      ]
    })
  },
  {
    $id: 'GovernmentIdDocumentBackImageCredential',
    additionalProperties: false
  }
) as UnumJsonSchema;

export const governmentIdStateCredentialJsonSchema = Type.Object(
  {
    state: Type.String({
      // format: 'iso3166-2', // TODO: add format
    })
  },
  { $id: 'GovernmentIdStateCredential', additionalProperties: false }
) as UnumJsonSchema;

export const governmentIdNumberCredentialJsonSchema = Type.Object(
  {
    idNumber: Type.String({
      description: 'Government identification document number. Note, it can be alphanumeric.',
      examples: [
        '801322-1117621',
        'F4698E1'
      ]
    })
  },
  { $id: 'GovernmentIdNumberCredential', additionalProperties: false }
) as UnumJsonSchema;

export const governmentIdIssuanceDateCredentialJsonSchema = Type.Object(
  {
    issuanceDate: Type.String({
      format: 'digits',
      description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
      examples: [
        '1687488596000',
        '-45709'
      ]
    })
  },
  { $id: 'GovernmentIdIssuanceDateCredential', additionalProperties: false }
) as UnumJsonSchema;

export const governmentIdExpirationDateCredentialJsonSchema = Type.Object(
  {
    expirationDate: Type.String({
      format: 'digits',
      description: 'Unix time in milliseconds since epoch, or a negative number of milliseconds before the Unix epoch.',
      examples: [
        '1687488596000',
        '-45709'
      ]
    })
  },
  { $id: 'GovernmentIdExpirationDateCredential', additionalProperties: false }
) as UnumJsonSchema;

export const employerCredentialJsonSchema = Type.Object(
  {
    employer: Type.String()
  },
  { $id: 'EmployerCredential', additionalProperties: false }
) as UnumJsonSchema;

export const titleCredentialJsonSchema = Type.Object(
  {
    title: Type.String()
  },
  { $id: 'TitleCredential', additionalProperties: false }
) as UnumJsonSchema;

export const annualIncomeCredentialJsonSchema = Type.Object(
  {
    income: Type.String({
      format: 'iso4217Amount',
      description: 'Annual income with the preceding ISO4217 currency format.',
      examples: [
        'USD 101000',
        'GBP 46000'
      ]
    })
  },
  { $id: 'AnnualIncomeCredential', additionalProperties: false }
) as UnumJsonSchema;

export const incomeCurrencyCredentialJsonSchema = Type.Object(
  {
    currency: Type.String({ format: 'iso4217' })
  },
  { $id: 'IncomeCurrencyCredential', additionalProperties: false }
) as UnumJsonSchema;

export const annualIncomeRangeCredentialJsonSchema = Type.Object(
  {
    income: Type.String({ format: 'iso4217AmountRange' })
  },
  { $id: 'AnnualIncomeRangeCredential', additionalProperties: false }
) as UnumJsonSchema;

export const employmentStartDateCredentialJsonSchema = Type.Object(
  {
    startDate: Type.String()
  },
  { $id: 'EmploymentStartDateCredential', additionalProperties: false }
) as UnumJsonSchema;

export const jsonSchemas: Record<string, UnumJsonSchema> = {
  EmailCredential: emailCredentialJsonSchema,
  IdentityCredential: identityCredentialJsonSchema,
  SsnCredential: ssnCredentialJsonSchema,
  CountryResidenceCredential: countryResidenceCredentialJsonSchema,
  NationalityCredential: nationalityCredentialJsonSchema,
  FacialImageCredential: facialImageCredentialJsonSchema,
  LivelinessCredential: livelinessCredentialJsonSchema,
  AddressCredential: addressCredentialJsonSchema,
  LastNameCredential: lastNameCredentialJsonSchema,
  FirstNameCredential: firstNameCredentialJsonSchema,
  BirthDateCredential: birthDateCredentialJsonSchema,
  PhoneCredential: phoneCredentialJsonSchema,
  FullNameCredential: fullNameCredentialJsonSchema,
  GenderCredential: genderCredentialJsonSchema,
  GovernmentIdDocumentImageCredential: governmentIdDocumentImageCredentialJsonSchema,
  LivelinessConfidenceCredential: livelinessConfidenceCredentialJsonSchema,
  FacialMatchCredential: facialMatchCredentialJsonSchema,
  FacialMatchConfidenceCredential: facialMatchConfidenceCredentialJsonSchema,
  GovernmentIdTypeCredential: governmentIdTypeCredentialJsonSchema,
  GovernmentIdDocumentBackImageCredential: governmentIdDocumentBackImageCredentialJsonSchema,
  SexCredential: sexCredentialJsonSchema,
  GovernmentIdStateCredential: governmentIdStateCredentialJsonSchema,
  GovernmentIdNumberCredential: governmentIdNumberCredentialJsonSchema,
  GovernmentIdIssuanceDateCredential: governmentIdIssuanceDateCredentialJsonSchema,
  GovernmentIdExpirationDateCredential: governmentIdExpirationDateCredentialJsonSchema,
  EmployerCredential: employerCredentialJsonSchema,
  TitleCredential: titleCredentialJsonSchema,
  AnnualIncomeCredential: annualIncomeCredentialJsonSchema,
  IncomeCurrencyCredential: incomeCurrencyCredentialJsonSchema,
  AnnualIncomeRangeCredential: annualIncomeRangeCredentialJsonSchema,
  EmploymentStartDateCredential: employmentStartDateCredentialJsonSchema
};
