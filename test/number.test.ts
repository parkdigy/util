import { numberFormat } from '../src/methods/number';

describe('util.number', () => {
  describe('format', () => {
    it('should format integer numbers correctly', () => {
      expect(numberFormat(1234567)).toBe('1,234,567');
      expect(numberFormat('1234567')).toBe('1,234,567');
    });

    it('should format decimal numbers correctly', () => {
      expect(numberFormat(1234.5678)).toBe('1,234.5678');
      expect(numberFormat('1234.5678')).toBe('1,234.5678');
    });

    it('should handle numbers with leading zeros', () => {
      expect(numberFormat('0001234.5678')).toBe('1,234.5678');
    });

    it('should handle numbers with trailing zeros', () => {
      expect(numberFormat('1234.567800')).toBe('1,234.5678');
    });

    it('should handle numbers with no integer part', () => {
      expect(numberFormat('.5678')).toBe('.5678');
    });

    it('should handle numbers with no decimal part', () => {
      expect(numberFormat('1234.')).toBe('1,234');
    });
  });
});
