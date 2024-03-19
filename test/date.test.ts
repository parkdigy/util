import dayjs from 'dayjs';
import beginTime from '../src/methods/beginTime';
import endTime from '../src/methods/endTime';
import formatDate from '../src/methods/formatDate';
import extractDate from '../src/methods/extractDate';
import weekDayText from '../src/methods/weekDayText';

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

describe('formatDate', () => {
  it('should format date to default format when no format is provided', () => {
    const date = new Date(2022, 1, 1, 13, 30, 15);
    const result = formatDate(date);
    expect(result).toBe('2022-02-01 13:30:15');
  });

  it('should format date to provided format', () => {
    const date = new Date(2022, 1, 1, 13, 30, 15);
    const result = formatDate(date, 'YYYY/MM/DD');
    expect(result).toBe('2022/02/01');
  });

  it('should handle Dayjs date', () => {
    const date = dayjs('2022-02-01T13:30:15');
    const result = formatDate(date, 'YYYY/MM/DD');
    expect(result).toBe('2022/02/01');
  });

  it('should handle string date', () => {
    const date = '2022-02-01T13:30:15';
    const result = formatDate(date, 'YYYY/MM/DD');
    expect(result).toBe('2022/02/01');
  });

  it('should return null when date is null', () => {
    const date = null;
    const result = formatDate(date);
    expect(result).toBe(null);
  });

  it('should return undefined when date is undefined', () => {
    const date = undefined;
    const result = formatDate(date);
    expect(result).toBe(undefined);
  });
});

describe('extractDate', () => {
  it('should extract date components from a Date object', () => {
    const date = new Date(2022, 1, 1, 13, 30, 15, 123);
    const result = extractDate(date);
    expect(result).toEqual({
      date: date,
      year: 2022,
      month: 2,
      day: 1,
      weekDay: 2,
      hour: 13,
      minute: 30,
      second: 15,
      millisecond: 123,
    });
  });

  it('should extract date components from a Dayjs object', () => {
    const date = dayjs('2022-02-01T13:30:15.123');
    const result = extractDate(date);
    expect(result).toEqual({
      date: date.toDate(),
      year: 2022,
      month: 2,
      day: 1,
      weekDay: 2,
      hour: 13,
      minute: 30,
      second: 15,
      millisecond: 123,
    });
  });

  it('should extract date components from the current date when no date is provided', () => {
    const now = dayjs();
    const result = extractDate(now);
    expect(result).toEqual({
      date: now.toDate(),
      year: now.year(),
      month: now.month() + 1,
      day: now.date(),
      weekDay: now.day(),
      hour: now.hour(),
      minute: now.minute(),
      second: now.second(),
      millisecond: now.millisecond(),
    });
  });
});

describe('weekDayText', () => {
  it('should return Korean weekday text for each weekday number', () => {
    expect(weekDayText(0)).toBe('일');
    expect(weekDayText(1)).toBe('월');
    expect(weekDayText(2)).toBe('화');
    expect(weekDayText(3)).toBe('수');
    expect(weekDayText(4)).toBe('목');
    expect(weekDayText(5)).toBe('금');
    expect(weekDayText(6)).toBe('토');
  });

  it('should return empty string for numbers outside of 0-6', () => {
    expect(weekDayText(-1)).toBe('');
    expect(weekDayText(7)).toBe('');
  });

  it('should return empty string for non-integer numbers', () => {
    expect(weekDayText(1.5)).toBe('');
  });
});
