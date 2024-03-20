import { versionString } from '../src/methods/version';

describe('util.version', () => {
  describe('toString', () => {
    it('should convert version to text with specified length and total items', () => {
      expect(versionString('1.2', 3, 3)).toBe('001.002.000');
      expect(versionString('1.2', 3, 5)).toBe('001.002.000.000.000');
      expect(versionString('1.2.3.4.5', 4, 3)).toBe('0001.0002.0003');
      expect(versionString('1', 2, 1)).toBe('01');
      expect(versionString('1.2.3', 2, 3)).toBe('01.02.03');
    });
  });
});
