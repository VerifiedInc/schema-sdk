"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonSchemas = void 0;
const addressCredential = __importStar(require("./addressCredential"));
const atomicCredential = __importStar(require("./atomicCredential"));
const compositeCredential = __importStar(require("./compositeCredential"));
const employerCredential = __importStar(require("./employerCredential"));
const governmentIdCredential = __importStar(require("./governmentIdCredential"));
const individualCredential = __importStar(require("./individualCredential"));
const backwardsCredential_1 = require("./backwardsCredential");
/**
 * Export all of the UnumID schema definitions.
 */
exports.jsonSchemas = {
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
    LineTypeCredential: atomicCredential.lineTypeCredentialJsonSchema,
    // Composite Credential
    AddressCredential: compositeCredential.addressCredentialJsonSchema,
    AnnualIncomeCredential: compositeCredential.annualIncomeCredentialJsonSchema,
    EmployerCredential: compositeCredential.employerCredentialJsonSchema,
    FullNameCredential: compositeCredential.fullNameCredentialJsonSchema,
    GovernmentIdCredential: compositeCredential.governmentIdCredentialJsonSchema,
    PhoneInfoCredential: compositeCredential.phoneInfoCredentialJsonSchema,
    // EmployerCredential
    EmploymentStartDateCredential: employerCredential.employmentStartDateCredentialJsonSchema,
    IncomeRangeCredential: employerCredential.incomeRangeCredentialJsonSchema,
    TitleCredential: employerCredential.titleCredentialJsonSchema,
    EmployerNameCredential: employerCredential.employerNameCredentialJsonSchema,
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
    GovernmentIdDocumentImageCredential: backwardsCredential_1.governmentIdDocumentImageCredentialJsonSchema,
    GovernmentIdTypeCredential: backwardsCredential_1.governmentIdTypeCredentialJsonSchema,
    GovernmentIdDocumentBackImageCredential: backwardsCredential_1.governmentIdDocumentBackImageCredentialJsonSchema,
    GovernmentIdStateCredential: backwardsCredential_1.governmentIdStateCredentialJsonSchema,
    GovernmentIdNumberCredential: backwardsCredential_1.governmentIdNumberCredentialJsonSchema,
    GovernmentIdIssuanceDateCredential: backwardsCredential_1.governmentIdIssuanceDateCredentialJsonSchema,
    GovernmentIdExpirationDateCredential: backwardsCredential_1.governmentIdExpirationDateCredentialJsonSchema,
    IncomeCurrencyCredential: backwardsCredential_1.incomeCurrencyCredentialJsonSchema,
    AnnualIncomeRangeCredential: backwardsCredential_1.annualIncomeRangeCredentialJsonSchema
};
__exportStar(require("./addressCredential"), exports);
__exportStar(require("./atomicCredential"), exports);
__exportStar(require("./backwardsCredential"), exports);
__exportStar(require("./compositeCredential"), exports);
__exportStar(require("./employerCredential"), exports);
__exportStar(require("./governmentIdCredential"), exports);
__exportStar(require("./individualCredential"), exports);
//# sourceMappingURL=index.js.map