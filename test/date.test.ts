import beginTime from '../src/methods/beginTime';
import endTime from '../src/methods/endTime';

describe('util.date', () => {
  describe('beginTime', () => {
    it('should return the date with time set to 00:00:00.0', () => {
      const dt = new Date();
      const result = beginTime(dt);
      expect(result.getHours()).toBe(0);
      expect(result.getMinutes()).toBe(0);
      expect(result.getSeconds()).toBe(0);
      expect(result.getMilliseconds()).toBe(0);
    });

    it('should return the current date with time set to 00:00:00.0 if no date is provided', () => {
      const result = beginTime();
      const currentDt = new Date();
      currentDt.setHours(0, 0, 0, 0);
      expect(result).toEqual(currentDt);
    });
  });

  describe('endTime', () => {
    it('should return the date with time set to 23:59:59', () => {
      const dt = new Date();
      const result = endTime(dt);
      expect(result.getHours()).toBe(23);
      expect(result.getMinutes()).toBe(59);
      expect(result.getSeconds()).toBe(59);
      expect(result.getMilliseconds()).toBe(0);
    });

    it('should return the date with time set to 23:59:59 and specified milliseconds', () => {
      const dt = new Date();
      const milliseconds = 500;
      const result = endTime(dt, milliseconds);
      expect(result.getHours()).toBe(23);
      expect(result.getMinutes()).toBe(59);
      expect(result.getSeconds()).toBe(59);
      expect(result.getMilliseconds()).toBe(milliseconds);
    });

    it('should return the current date with time set to 23:59:59 if no date is provided', () => {
      const result = endTime();
      const currentDt = new Date();
      currentDt.setHours(23, 59, 59, 0);
      expect(result).toEqual(currentDt);
    });
  });
});
