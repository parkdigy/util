import personalNoAutoDash from '../src/methods/personalNoAutoDash';

describe('util.personalNo', () => {
  describe('autoDash', () => {
    it('should add dashes to the personal number', () => {
      expect(personalNoAutoDash('1234567890123')).toBe('123456-7890123');
      expect(personalNoAutoDash('1234567890')).toBe('123456-7890');
      expect(personalNoAutoDash('123456')).toBe('123456');
      expect(personalNoAutoDash('')).toBe('');
    });
  });
});
