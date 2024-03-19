import companyNoAutoDash from '../src/methods/companyNoAutoDash';

describe('util.companyNo', () => {
  describe('autoDash', () => {
    it("사업자등록번호 '-' 자동 추가 검증", () => {
      expect(companyNoAutoDash('1234567890123')).toBe('123-45-67890123');
      expect(companyNoAutoDash('1234567890')).toBe('123-45-67890');
      expect(companyNoAutoDash('12345')).toBe('123-45');
      expect(companyNoAutoDash('123')).toBe('123');
      expect(companyNoAutoDash('')).toBe('');
    });
  });
});
