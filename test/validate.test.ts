import { addressCredentialJsonSchema } from '../src/jsonSchemas';
import { validate } from '../src/validate';

describe('Validate Schemas', () => {
  describe('EmailCredential Schema', () => {
    const evalInvalid = [
      'test@gmail.com mail@test.org',
      'hello@',
      '@test',
      'email@gmail',
      'theproblem@test@gmail.com',
      'mail with@space.com',
      'mail@testing.com$',
      'mail@testing.c+m',
      'mail@test$ng.com'
    ];
    const evalValid = [
      'geon@ihateregex.io',
      'mail@testing.com',
      'mail+1@testing.com',
      'mail_lastmail@testing.com',
      'mail@testing.com',
      'mail@testing.uk.com'
    ];
    describe('Valid Emails', () => {
      evalValid.forEach((email) => {
        it(`valid email: ${email}`, async () => {
          const valid = validate('EmailCredential', {
            email
          });
          expect(valid).toEqual(true);
        });
      });
    });

    describe('Invalid Emails', () => {
      evalInvalid.forEach((email) => {
        it(`invalid email: ${email}`, async () => {
          try {
            const valid = validate('EmailCredential', {
              email
            });
            fail();
          } catch (error) {
            expect(error);
          }
        });
      });
    });
  });

  describe('PhoneCredential Schema', () => {
    test('valid', () => {
      const valid = validate('PhoneCredential', {
        phone: '+10123456789'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('PhoneCredential', {
          number: '+10123456789'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (with dashes)', async () => {
      expect.assertions(1);
      try {
        validate('PhoneCredential', {
          number: '+1(012)345-6789'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('SsnCredential Schema', () => {
    test('valid', () => {
      const valid = validate('SsnCredential', {
        ssn: '111224444'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('SsnCredential', {
          SSN: '111224444'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (with dashes)', async () => {
      expect.assertions(1);
      try {
        validate('SsnCredential', {
          ssn: '111-22-4444'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('IdentityCredential Schema', () => {
    it('valid', async () => {
      const valid = validate('IdentityCredential', {});
      expect(valid).toEqual(true);
    });
  });

  describe('SexCredential Schema', () => {
    it('valid', async () => {
      const valid = validate('SexCredential', {
        sex: 'Male'
      });
      expect(valid).toEqual(true);
    });

    it('invalid', async () => {
      try {
        const valid = validate('SexCredential', {
          gender: 'female'
        });
        fail();
      } catch (error) {
        expect(error);
      }
    });
  });

  describe('NationalityCredential Schema', () => {
    test('valid', () => {
      const valid = validate('NationalityCredential', {
        nationality: 'US'
      });

      expect(valid).toEqual(true);
    });

    test('invalid', () => {
      expect.assertions(1);
      try {
        validate('NationalityCredential', {
          nationality: 'United States'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('NationalityCredential', {
          email: 'therealboris@draper.vc'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('GovernmentIdStateCredential Schema', () => {
    test('valid', () => {
      const valid = validate('GovernmentIdStateCredential', {
        state: 'US-CA'
      });

      expect(valid).toEqual(true);
    });

    test('invalid', () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdStateCredential', {
          state: 'Florida'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid key', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdStateCredential', {
          email: 'therealboris@draper.vc'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('GovernmentIdNumberCredential Schema', () => {
    test('valid', () => {
      const valid = validate('GovernmentIdNumberCredential', {
        idNumber: '123456789'
      });

      expect(valid).toEqual(true);
    });

    test('invalid', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdNumberCredential', {
          email: 'therealboris@draper.vc'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('GovernmentIdIssuanceDateCredential Schema', () => {
    test('valid', () => {
      const valid = validate('GovernmentIdIssuanceDateCredential', {
        issuanceDate: '1672574400000'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdIssuanceDateCredential', {
          date: '1672574400000'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdIssuanceDateCredential', {
          issuanceDate: new Date()
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdIssuanceDateCredential', {
          issuanceDate: '631195200005'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('GovernmentIdExpirationDateCredential Schema', () => {
    test('valid', () => {
      const valid = validate('GovernmentIdExpirationDateCredential', {
        expirationDate: '1672574400000'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdExpirationDateCredential', {
          date: '1672574400000'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdExpirationDateCredential', {
          expirationDate: new Date()
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdExpirationDateCredential', {
          expirationDate: '631195200005'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('EmployerCredential Schema', () => {
    test('valid', () => {
      const valid = validate('EmployerCredential', {
        employer: 'Unum ID'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('EmployerCredential', {
          email: 'Unum ID'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (not string)', async () => {
      expect.assertions(1);
      try {
        validate('EmployerCredential', {
          employer: new Date()
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('TitleCredential Schema', () => {
    test('valid', () => {
      const valid = validate('TitleCredential', {
        title: 'Unum ID'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('TitleCredential', {
          email: 'Unum ID'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (not string)', async () => {
      expect.assertions(1);
      try {
        validate('TitleCredential', {
          title: new Date()
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('AnnualIncomeCredential Schema', () => {
    test('valid', () => {
      const valid = validate('AnnualIncomeCredential', {
        income: 'USD 90000'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('AnnualIncomeCredential', {
          email: 'USD 90000'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (not integer)', async () => {
      expect.assertions(1);
      try {
        validate('IncomeCredential', {
          income: new Date()
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('IncomeCurrencyCredential Schema', () => {
    test('valid', () => {
      const valid = validate('IncomeCurrencyCredential', {
        currency: 'USD'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('IncomeCurrencyCredential', {
          email: 'USD'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (not string)', async () => {
      expect.assertions(1);
      try {
        validate('IncomeCurrencyCredential', {
          currency: new Date()
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('AnnualIncomeRangeCredential Schema', () => {
    test('valid', () => {
      const valid = validate('AnnualIncomeRangeCredential', {
        income: 'EUR min25001_max50000'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('AnnualIncomeRangeCredential', {
          currency: 'EUR min25001_max50000'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (not string)', async () => {
      expect.assertions(1);
      try {
        validate('AnnualIncomeRangeCredential', {
          currency: new Date()
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('EmploymentStartDateCredential Schema', () => {
    test('valid', () => {
      const valid = validate('EmploymentStartDateCredential', {
        startDate: '631195200000'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('EmploymentStartDateCredential', {
          currency: '1686693430283'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format (not digits)', async () => {
      expect.assertions(1);
      try {
        validate('EmploymentStartDateCredential', {
          currency: new Date()
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('AddressCredential Schema', () => {
    test('valid', () => {
      const valid = validate('AddressCredential', {
        address: '307 3rd Ave, Apt #4, San Austin, US-GA 18025-9876'
      });

      expect(valid).toEqual(true);
    });

    test('valid - removing all additionalFields', async () => {
      expect.assertions(1);
      const valid = validate('AddressCredential', {
        address: '307 3rd Ave, Apt #4, San Austin, US-GA 18025-9876'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong format', async () => {
      expect.assertions(1);
      try {
        validate('AddressCredential', {
          address: new Date()
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  describe('LivenessCredential Schema', () => {
    test('valid', () => {
      const valid = validate('LivenessCredential', {
        confidence: 'High'
      });

      expect(valid).toEqual(true);
    });
  });

  // CountryCredential
  describe('CountryCredential Schema', () => {
    test('valid', () => {
      const valid = validate('CountryCredential', {
        country: 'US'
      });

      expect(valid).toEqual(true);
    });

    test('valid - removing additional keys', () => {
      const valid = validate('CountryCredential', {
        country: 'BR',
        city: 'San Francisco'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('CountryCredential', {
          country: 'USA'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  // StateCredential
  describe('StateCredential Schema', () => {
    test('valid - 1 alphanumeric characters', () => {
      const valid = validate('StateCredential', {
        state: 'C'
      });

      expect(valid).toEqual(true);
    });

    test('valid - 2 alphanumeric characters', () => {
      const valid = validate('StateCredential', {
        state: 'CA'
      });

      expect(valid).toEqual(true);
    });

    test('valid - 3 alphanumeric characters', () => {
      const valid = validate('StateCredential', {
        state: 'FI1'
      });

      expect(valid).toEqual(true);
    });

    test('valid - removing additional keys', () => {
      const valid = validate('StateCredential', {
        state: 'CA',
        city: 'San Francisco'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('StateCredential', {
          state: 'California'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('StateCredential', {
          state: '--2'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  // AmountCredential
  describe('AmountCredential Schema', () => {
    test('valid', () => {
      const valid = validate('AmountCredential', {
        amount: '100'
      });

      expect(valid).toEqual(true);
    });

    test('valid - negative number', () => {
      const valid = validate('AmountCredential', {
        amount: '-100'
      });

      expect(valid).toEqual(true);
    });

    test('valid - removing additional keys', () => {
      const valid = validate('AmountCredential', {
        amount: '100',
        currency: 'USD'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('AmountCredential', {
          amount: '100.00'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('AmountCredential', {
          amount: '100,00'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('AmountCredential', {
          amount: 'abc'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('AmountCredential', {
          amount: 'USD 100'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  // CurrencyCredential
  describe('CurrencyCredential Schema', () => {
    test('valid', () => {
      const valid = validate('CurrencyCredential', {
        currency: 'USD'
      });

      expect(valid).toEqual(true);
    });

    test('valid - removing additional keys', () => {
      const valid = validate('CurrencyCredential', {
        currency: 'USD',
        amount: '100'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('CurrencyCredential', {
          currency: 'US'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  // MatchCredential
  describe('MatchCredential Schema', () => {
    test('valid', () => {
      const valid = validate('MatchCredential', {
        confidence: 'High'
      });

      expect(valid).toEqual(true);
    });

    test('valid - removing additional keys', () => {
      const valid = validate('MatchCredential', {
        confidence: 'Very Low',
        type: 'Face'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('MatchCredential', {
          confidence: 'yes'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  // AddressCredential
  describe('AddressCredential Composite Schema', () => {
    test('valid', () => {
      const valid = validate('AddressCredential', {
        city: 'San Francisco',
        country: 'US',
        state: 'CA',
        line1: '307 3rd Ave',
        zipCode: '94118'
      });

      expect(valid).toEqual(true);
    });

    test('valid - US ZipCode 9 digits', () => {
      const valid = validate('AddressCredential', {
        city: 'San Francisco',
        country: 'US',
        state: 'CA',
        line1: '307 3rd Ave',
        zipCode: '94118-1234'
      });

      expect(valid).toEqual(true);
    });

    test('valid', () => {
      const valid = validate('AddressCredential', {
        city: 'Curitiba',
        country: 'BR',
        state: 'PR',
        line1: 'Rua 24 de Maio',
        zipCode: '80010-080'
      });

      expect(valid).toEqual(true);
    });

    test('valid', () => {
      const valid = validate('AddressCredential', {
        city: 'Curitiba',
        country: 'BR',
        state: 'PR',
        line1: 'Rua 24 de Maio',
        line2: 'Apt 123',
        zipCode: '80010-080'
      });

      expect(valid).toEqual(true);
    });

    test('valid - removing additional keys', () => {
      const valid = validate('AddressCredential', {
        city: 'San Francisco',
        country: 'US',
        state: 'CA',
        line1: '307 3rd Ave',
        zipCode: '94118'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - US Country wrong zipCode', async () => {
      expect.assertions(1);
      try {
        validate('AddressCredential', {
          city: 'San Francisco',
          country: 'US',
          state: 'CA',
          streetAddress: '307 3rd Ave',
          line1: '307 3rd Ave',
          zipCode: '94118'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - US Country wrong Region Code', async () => {
      expect.assertions(1);
      try {
        validate('AddressCredential', {
          city: 'San Francisco',
          country: 'US',
          state: 'XX',
          streetAddress: '307 3rd Ave',
          line1: '307 3rd Ave',
          zipCode: '94118'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - US Country wrong Region Code and ZIP Code', async () => {
      expect.assertions(1);
      try {
        validate('AddressCredential', {
          city: 'San Francisco',
          country: 'US',
          state: 'XX',
          streetAddress: '307 3rd Ave',
          line1: '307 3rd Ave',
          zipCode: '941181'
        });

        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  // AnnualIncomeCredential
  describe('AnnualIncomeCredential Composite Schema', () => {
    test('valid', () => {
      const valid = validate('AnnualIncomeCredential', {
        amount: '100',
        currency: 'USD',
        income: {}
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('AnnualIncomeCredential', {
          income: '100000'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('AnnualIncomeCredential', {
          amount: '100',
          currency: 'AZD'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('AnnualIncomeCredential', {
          amount: '100.00',
          currency: 'USD'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - missing properties', async () => {
      expect.assertions(1);
      try {
        validate('AnnualIncomeCredential', {
          amount: '100.00'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  // EmployerCredential
  describe('EmployerCredential Composite Schema', () => {
    test('valid', () => {
      const valid = validate('EmployerCredential', {
        employer: 'Unum ID',
        title: 'Software Engineer',
        startDate: 631195200000,
        income: 'USD 90000',
        incomeRange: 'USD min25001_max50000'
      });

      expect(valid).toEqual(true);
    });

    test('valid - composite annual income', () => {
      const valid = validate('EmployerCredential', {
        employer: 'Unum ID',
        title: 'Software Engineer',
        startDate: 631195200000,
        amount: '90000',
        currency: 'USD',
        incomeRange: 'USD min25001_max50000'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('EmployerCredential', {
          employer: 'Unum ID',
          title: 'Software Engineer',
          startDate: 631195200000,
          income: 'XAS 90000',
          incomeRange: 'USD min25001_max100000'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('EmployerCredential', {
          employer: 'Unum ID',
          title: 'Software Engineer',
          startDate: 1686693430283,
          amount: '90000',
          currency: 'ZZZ',
          incomeRange: 'USD min25001_max100000'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('EmployerCredential', {
          employer: 'Unum ID',
          title: 'Software Engineer',
          startDate: 1686693430283,
          amount: '90000.00',
          currency: 'USD',
          incomeRange: 'USD min25001_max100000'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  // FullNameCredential
  describe('FullNameCredential Composite Schema', () => {
    test('valid', () => {
      const valid = validate('FullNameCredential', {
        firstName: 'John',
        lastName: 'Doe'
      });

      expect(valid).toEqual(true);
    });

    test('valid - With middle name', () => {
      const valid = validate('FullNameCredential', {
        firstName: 'John',
        middleName: 'M',
        lastName: 'Doe'
      });

      expect(valid).toEqual(true);
    });
  });

  // GovernmentIdCredential
  describe('GovernmentIdCredential Composite Schema', () => {
    test('valid', () => {
      const valid = validate('GovernmentIdCredential', {
        idNumber: '123456789',
        state: 'CA',
        issuanceDate: 631195200000,
        expirationDate: 1672574400000,
        documentType: 'Drivers License',
        documentImage:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII',
        documentBackImage:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
      });

      expect(valid).toEqual(true);
    });

    test('valid', () => {
      const valid = validate('GovernmentIdCredential', {
        idNumber: '123456789',
        state: 'CA',
        issuanceDate: 631195200000,
        expirationDate: 1672574400000,
        documentType: 'Drivers License',
        documentImage:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII',
        documentBackImage:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('GovernmentIdCredential', {
          idNumber: '123456789',
          state: 'us-CA',
          issuanceDate: 1686693430283,
          expirationDate: 1686693430283,
          documentType: 'Driver License',
          documentImage:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII',
          documentBackImage:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII',
          what: 'CA'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  // EmploymentStartDateCredential
  describe('EmploymentStartDateCredential Schema', () => {
    test('valid', () => {
      const valid = validate('EmploymentStartDateCredential', {
        startDate: '-331560000000'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('EmploymentStartDateCredential', {
          birthDay: '-331560000000'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format', async () => {
      expect.assertions(1);
      try {
        validate('EmploymentStartDateCredential', {
          startDate: new Date()
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('EmploymentStartDateCredential', {
          startDate: '-331534805'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });

  // BirthDateCredential
  describe('BirthDateCredential Schema', () => {
    test('valid', () => {
      const valid = validate('BirthDateCredential', {
        birthDate: '-331560000000'
      });

      expect(valid).toEqual(true);
    });

    test('invalid - wrong key', async () => {
      expect.assertions(1);
      try {
        validate('BirthDateCredential', {
          birthDay: '-331560000000'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong format', async () => {
      expect.assertions(1);
      try {
        validate('BirthDateCredential', {
          birthDay: -331560000000
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });

    test('invalid - wrong value', async () => {
      expect.assertions(1);
      try {
        validate('BirthDateCredential', {
          birthDay: '-331534805'
        });
        fail();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });
});

describe('LineTypeCredential Schema', () => {
  test('valid - Mobile', () => {
    const valid = validate('LineTypeCredential', {
      type: 'Mobile'
    });

    expect(valid).toEqual(true);
  });

  test('valid - Landline', () => {
    const valid = validate('LineTypeCredential', {
      type: 'Landline'
    });

    expect(valid).toEqual(true);
  });

  test('valid - FixedVoIP', () => {
    const valid = validate('LineTypeCredential', {
      type: 'FixedVoIP'
    });

    expect(valid).toEqual(true);
  });

  test('valid - NonFixVoIP', () => {
    const valid = validate('LineTypeCredential', {
      type: 'NonFixedVoIP'
    });

    expect(valid).toEqual(true);
  });

  test('invalid - wrong value', async () => {
    expect.assertions(1);
    try {
      validate('CountryCredential', {
        type: 'phone'
      });
      fail();
    } catch (e) {
      expect(e).toBeDefined();
    }
  });

  test('invalid - wrong key', async () => {
    expect.assertions(1);
    try {
      validate('CountryCredential', {
        lineType: 'Mobile'
      });
      fail();
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
});

describe('PhoneInfoCredential Schema', () => {
  test('valid - Mobile', () => {
    const valid = validate('PhoneInfoCredential', {
      type: 'Mobile',
      phone: '+16175551212'
    });

    expect(valid).toEqual(true);
  });

  test('valid - Landline', () => {
    const valid = validate('PhoneInfoCredential', {
      type: 'Landline',
      phone: '+14041238686'
    });

    expect(valid).toEqual(true);
  });

  test('invalid - wrong line type value', async () => {
    expect.assertions(1);
    try {
      validate('PhoneInfoCredential', {
        type: 'phone',
        phone: '+14041238686'
      });
      fail();
    } catch (e) {
      expect(e).toBeDefined();
    }
  });

  test('invalid - missing phone key', async () => {
    expect.assertions(1);
    try {
      validate('PhoneInfoCredential', {
        lineType: 'Mobile'
      });
      fail();
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
});
