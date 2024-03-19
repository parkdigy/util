import maskingBatch from '../src/methods/maskingBatch';
import maskingName from '../src/methods/maskingName';
import maskingTel from '../src/methods/maskingTel';
import maskingEmail from '../src/methods/maskingEmail';
import maskingPersonalNo from '../src/methods/maskingPersonalNo';
import maskingCompanyNo from '../src/methods/maskingCompanyNo';

describe('Masking', () => {
  describe('batch', () => {
    it('일괄 마스킹', () => {
      expect(
        maskingBatch(
          {
            name: '김철수',
            email: 'test@example.com',
            tel: '02-1234-5678',
            mobile: '010-1234-5678',
            companyNo: '123-45-67890',
            personalNo: '123456-1234567',
          },
          { name: 'name', email: 'email', tel: ['tel', 'mobile'], companyNo: 'companyNo', personalNo: 'personalNo' }
        )
      ).toEqual({
        name: '김*수',
        email: 'te**@example.com',
        tel: '02-****-5678',
        mobile: '010-****-5678',
        companyNo: '123-45-*****',
        personalNo: '123456-*******',
      });
    });
  });

  describe('name', () => {
    it('이름이 한 글자일 때 마스킹', () => {
      expect(maskingName('김')).toBe('*');
    });

    it('이름이 두 글자일 때 마스킹', () => {
      expect(maskingName('김철')).toBe('김*');
    });

    it('이름이 세 글자 이상일 때 마스킹', () => {
      expect(maskingName('김철수')).toBe('김*수');
    });
  });

  describe('email', () => {
    it('이메일 마스킹', () => {
      expect(maskingEmail('test@example.com')).toBe('te**@example.com');
    });
  });

  describe('tel', () => {
    it('전화번호 마스킹', () => {
      expect(maskingTel('01012345678')).toBe('010****5678');
      expect(maskingTel('010-1234-5678')).toBe('010-****-5678');
    });
  });

  describe('companyNo', () => {
    it('사업자등록번호 마스킹', () => {
      expect(maskingCompanyNo('1234567890')).toBe('12345*****');
      expect(maskingCompanyNo('123-45-67890')).toBe('123-45-*****');
    });
  });

  describe('personalNo', () => {
    it('주민등록번호 마스킹', () => {
      expect(maskingPersonalNo('1234561234567')).toBe('123456*******');
      expect(maskingPersonalNo('123456-1234567')).toBe('123456-*******');
    });
  });
});
