import { telNoAutoDash } from '../src/methods/telNo';

describe('autoDash', () => {
  it('should add dashes to the telephone number', () => {
    expect(telNoAutoDash('01012345678')).toBe('010-1234-5678');
    expect(telNoAutoDash('0101234567')).toBe('010-123-4567');
    expect(telNoAutoDash('0212345678')).toBe('02-1234-5678');
    expect(telNoAutoDash('021234567')).toBe('02-123-4567');
    expect(telNoAutoDash('03123456789')).toBe('031-2345-6789');
    expect(telNoAutoDash('0312345678')).toBe('031-234-5678');
    expect(telNoAutoDash('0212345')).toBe('02-123-45');
    expect(telNoAutoDash('02123')).toBe('02-123');
    expect(telNoAutoDash('')).toBe('');
  });

  it('should not add dashes to the telephone number if it does not match the conditions', () => {
    expect(telNoAutoDash('0101234567890')).toBe('0101234567890');
    expect(telNoAutoDash('1234567890')).toBe('1234567890');
    expect(telNoAutoDash('123456')).toBe('123456');
    expect(telNoAutoDash('123')).toBe('123');
  });
});
