import telAutoDash from '../src/methods/telAutoDash';

describe('util.tel', () => {
  describe('autoDash', () => {
    it('should add dashes to the telephone number', () => {
      expect(telAutoDash('01012345678')).toBe('010-1234-5678');
      expect(telAutoDash('0101234567')).toBe('010-123-4567');
      expect(telAutoDash('0212345678')).toBe('02-1234-5678');
      expect(telAutoDash('021234567')).toBe('02-123-4567');
      expect(telAutoDash('03123456789')).toBe('031-2345-6789');
      expect(telAutoDash('0312345678')).toBe('031-234-5678');
      expect(telAutoDash('0212345')).toBe('02-123-45');
      expect(telAutoDash('02123')).toBe('02-123');
      expect(telAutoDash('')).toBe('');
    });

    it('should not add dashes to the telephone number if it does not match the conditions', () => {
      expect(telAutoDash('0101234567890')).toBe('0101234567890');
      expect(telAutoDash('1234567890')).toBe('1234567890');
      expect(telAutoDash('123456')).toBe('123456');
      expect(telAutoDash('123')).toBe('123');
    });
  });
});
