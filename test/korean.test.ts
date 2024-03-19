import koreanRo from '../src/methods/koreanRo';
import koreanAppendRo from '../src/methods/koreanAppendRo';
import koreanRul from '../src/methods/koreanRul';
import koreanAppendRul from '../src/methods/koreanAppendRul';

describe('util.korean', () => {
  describe('ro', () => {
    it('should append 로/으로 to the given text', () => {
      expect(koreanRo('한국어')).toBe('로');
      expect(koreanRo('한국')).toBe('으로');
    });
  });

  describe('appendRo', () => {
    it('should append 로/으로 to the given text', () => {
      expect(koreanAppendRo('한글어')).toBe('한글어로');
      expect(koreanAppendRo('한국')).toBe('한국으로');
    });

    it('should append "로" with a space to the given text if addSpace is true', () => {
      expect(koreanAppendRo('한글어', true)).toBe('한글어 로');
      expect(koreanAppendRo('한국', true)).toBe('한국 으로');
    });
  });

  describe('rul', () => {
    it('should append "를" to the given text', () => {
      expect(koreanRul('한국어')).toBe('를');
      expect(koreanRul('한국')).toBe('을');
    });
  });

  describe('appendRul', () => {
    it('should append "를" to the given text', () => {
      expect(koreanAppendRul('한국어')).toBe('한국어를');
      expect(koreanAppendRul('한국')).toBe('한국을');
    });

    it('should append "를" with a space to the given text if addSpace is true', () => {
      expect(koreanAppendRul('한국어', true)).toBe('한국어 를');
      expect(koreanAppendRul('한국', true)).toBe('한국 을');
    });
  });
});
