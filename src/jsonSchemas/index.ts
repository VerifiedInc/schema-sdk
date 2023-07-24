import { TObject, TProperties } from '@sinclair/typebox';

import * as addressCredential from './addressCredential';
import * as atomicCredential from './atomicCredential';
import * as compositeCredential from './compositeCredential';
import * as employerCredential from './employerCredential';
import * as governmentIdCredential from './governmentIdCredential';
import * as individualCredential from './individualCredential';
import {
  governmentIdDocumentImageCredentialJsonSchema,
  governmentIdTypeCredentialJsonSchema,
  governmentIdDocumentBackImageCredentialJsonSchema,
  governmentIdStateCredentialJsonSchema,
  governmentIdNumberCredentialJsonSchema,
  governmentIdIssuanceDateCredentialJsonSchema,
  governmentIdExpirationDateCredentialJsonSchema,
  incomeCurrencyCredentialJsonSchema,
  annualIncomeRangeCredentialJsonSchema
} from './backwardsCredential';

/**
 * Interface to assist with typings of the UnumID schema definitions, which will always have $id defined.
 */
export interface UnumJsonSchema extends TObject<TProperties> {
  $id: string; // UnumID schema definitions will always have a valid $id property
}

/**
 * Export all of the UnumID schema definitions.
 */

export const jsonSchemas: Record<string, UnumJsonSchema> = {
  // Address Credential
  CityCredential: addressCredential.cityCredentialJsonSchema,
  CountryCredential: addressCredential.countryCredentialJsonSchema,
  Line1Credential: addressCredential.line1CredentialJsonSchema,
  Line2Credential: addressCredential.line2CredentialJsonSchema,
  StateCredential: addressCredential.stateCredentialJsonSchema,
  ZipCodeCredential: addressCredential.zipCodeCredentialJsonSchema,

  // Atomic Credential
  AmountCredential: atomicCredential.amountCredentialJsonSchema,
  CurrencyCredential: atomicCredential.currencyCredentialJsonSchema,
  IdentityCredential: atomicCredential.identityCredentialJsonSchema,
  LivenessCredential: atomicCredential.livenessCredentialJsonSchema,
  MatchCredential: atomicCredential.matchCredentialJsonSchema,

  // Composite Credential
  AddressCredential: compositeCredential.addressCredentialJsonSchema,
  AnnualIncomeCredential: compositeCredential.annualIncomeCredentialJsonSchema,
  EmployerCredential: compositeCredential.employerCredentialJsonSchema,
  FullNameCredential: compositeCredential.fullNameCredentialJsonSchema,
  GovernmentIdCredential: compositeCredential.governmentIdCredentialJsonSchema,

  // EmployerCredential
  EmploymentStartDateCredential: employerCredential.employmentStartDateCredentialJsonSchema,
  IncomeRangeCredential: employerCredential.incomeRangeCredentialJsonSchema,
  TitleCredential: employerCredential.titleCredentialJsonSchema,

  // GovernmentIdCredential
  DocumentBackImageCredential: governmentIdCredential.documentBackImageCredentialJsonSchema,
  DocumentImageCredential: governmentIdCredential.documentImageCredentialJsonSchema,
  DocumentNumberCredential: governmentIdCredential.documentNumberCredentialJsonSchema,
  DocumentTypeCredential: governmentIdCredential.documentTypeCredentialJsonSchema,
  ExpirationDateCredential: governmentIdCredential.expirationDateCredentialJsonSchema,
  IssuanceDateCredential: governmentIdCredential.issuanceDateCredentialJsonSchema,

  // IndividualCredential
  BirthDateCredential: individualCredential.birthDateCredentialJsonSchema,
  CountryResidenceCredential: individualCredential.countryResidenceCredentialJsonSchema,
  EmailCredential: individualCredential.emailCredentialJsonSchema,
  FacialImageCredential: individualCredential.facialImageCredentialJsonSchema,
  FirstNameCredential: individualCredential.firstNameCredentialJsonSchema,
  GenderCredential: individualCredential.genderCredentialJsonSchema,
  LastNameCredential: individualCredential.lastNameCredentialJsonSchema,
  MiddleNameCredential: individualCredential.middleNameCredentialJsonSchema,
  NationalityCredential: individualCredential.nationalityCredentialJsonSchema,
  PhoneCredential: individualCredential.phoneCredentialJsonSchema,
  SexCredential: individualCredential.sexCredentialJsonSchema,
  SsnCredential: individualCredential.ssnCredentialJsonSchema,

  // Backwards compatibility
  GovernmentIdDocumentImageCredential: governmentIdDocumentImageCredentialJsonSchema,
  GovernmentIdTypeCredential: governmentIdTypeCredentialJsonSchema,
  GovernmentIdDocumentBackImageCredential: governmentIdDocumentBackImageCredentialJsonSchema,
  GovernmentIdStateCredential: governmentIdStateCredentialJsonSchema,
  GovernmentIdNumberCredential: governmentIdNumberCredentialJsonSchema,
  GovernmentIdIssuanceDateCredential: governmentIdIssuanceDateCredentialJsonSchema,
  GovernmentIdExpirationDateCredential: governmentIdExpirationDateCredentialJsonSchema,
  IncomeCurrencyCredential: incomeCurrencyCredentialJsonSchema,
  AnnualIncomeRangeCredential: annualIncomeRangeCredentialJsonSchema
};

export * from './addressCredential';
export * from './atomicCredential';
export * from './backwardsCredential';
export * from './compositeCredential';
export * from './employerCredential';
export * from './governmentIdCredential';
export * from './individualCredential';
