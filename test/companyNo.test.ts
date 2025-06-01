import { businessNoAutoDash } from '../src/methods/businessNo';

describe('util.businessNo', () => {
  describe('autoDash', () => {
    it("사업자등록번호 '-' 자동 추가 검증", () => {
      expect(businessNoAutoDash('1234567890123')).toBe('123-45-67890123');
      expect(businessNoAutoDash('1234567890')).toBe('123-45-67890');
      expect(businessNoAutoDash('12345')).toBe('123-45');
      expect(businessNoAutoDash('123')).toBe('123');
      expect(businessNoAutoDash('')).toBe('');
    });
  });
});
