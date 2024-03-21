import {
  empty,
  notEmpty,
  equal,
  contains,
  ifEmpty,
  ifNotEmpty,
  ifNull,
  ifNotNull,
  ifUndefined,
  ifNotUndefined,
  ifNullOrUndefined,
  ifNotNullAndUndefined,
  isEmail,
  isUrl,
  isTelNo,
  isMobileNo,
  isPersonalNo,
  isCompanyNo,
  isNumericOnlyText,
} from '../src/methods/compare';

describe('empty', () => {
  it('should return true for empty values', () => {
    expect(empty(null)).toBe(true);
    expect(empty(undefined)).toBe(true);
    expect(empty('')).toBe(true);
    expect(empty([])).toBe(true);
    expect(empty({})).toBe(true);
  });

  it('should return false for non-empty values', () => {
    expect(empty(0)).toBe(false);
    expect(empty('hello')).toBe(false);
    expect(empty([1, 2, 3])).toBe(false);
    expect(empty({ a: 1 })).toBe(false);
  });
});

describe('notEmpty', () => {
  it('should return true for non-empty values', () => {
    expect(notEmpty(0)).toBe(true);
    expect(notEmpty('hello')).toBe(true);
    expect(notEmpty([1, 2, 3])).toBe(true);
    expect(notEmpty({ a: 1 })).toBe(true);
  });

  it('should return false for empty values', () => {
    expect(notEmpty(null)).toBe(false);
    expect(notEmpty(undefined)).toBe(false);
    expect(notEmpty('')).toBe(false);
    expect(notEmpty([])).toBe(false);
    expect(notEmpty({})).toBe(false);
  });
});

describe('equal', () => {
  it('should return true for equal values', () => {
    expect(equal(1, 1)).toBe(true);
    expect(equal('hello', 'hello')).toBe(true);
    expect(equal([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(equal({ a: 1 }, { a: 1 })).toBe(true);
  });

  it('should return false for non-equal values', () => {
    expect(equal(1, 2)).toBe(false);
    expect(equal('hello', 'world')).toBe(false);
    expect(equal([1, 2, 3], [4, 5, 6])).toBe(false);
    expect(equal({ a: 1 }, { b: 2 })).toBe(false);
  });
});

describe('contains', () => {
  it('should return true if the list contains the value', () => {
    expect(contains([1, 2, 3], 2)).toBe(true);
    expect(contains(['a', 'b', 'c'], 'b')).toBe(true);
  });

  it('should return false if the list does not contain the value', () => {
    expect(contains([1, 2, 3], 4)).toBe(false);
    expect(contains(['a', 'b', 'c'], 'd')).toBe(false);
  });
});

describe('ifEmpty', () => {
  it('should return the replacement value when the original value is empty', () => {
    const result = ifEmpty('', 'replacement');
    expect(result).toBe('replacement');
  });

  it('should return the original value when the original value is not empty', () => {
    const result = ifEmpty('original', 'replacement');
    expect(result).toBe('original');
  });

  it('should handle non-string values', () => {
    const result = ifEmpty(0, 'replacement');
    expect(result).toBe(0);
  });

  it('should handle null values', () => {
    const result = ifEmpty(null, 'replacement');
    expect(result).toBe('replacement');
  });

  it('should handle undefined values', () => {
    const result = ifEmpty(undefined, 'replacement');
    expect(result).toBe('replacement');
  });
});

describe('ifNotEmpty', () => {
  it('should return the replacement value when the original value is not empty', () => {
    const result = ifNotEmpty('original', 'replacement');
    expect(result).toBe('replacement');
  });

  it('should return the original value when the original value is empty', () => {
    const result = ifNotEmpty('', 'replacement');
    expect(result).toBe('');
  });

  it('should handle non-string values', () => {
    const result = ifNotEmpty(123, 'replacement');
    expect(result).toBe('replacement');
  });

  it('should handle null values', () => {
    const result = ifNotEmpty(null, 'replacement');
    expect(result).toBe(null);
  });

  it('should handle undefined values', () => {
    const result = ifNotEmpty(undefined, 'replacement');
    expect(result).toBe(undefined);
  });
});

describe('ifNull', () => {
  it('should return the second value if the first value is null', () => {
    expect(ifNull(null, 'default')).toBe('default');
    expect(ifNull(undefined, 'default')).toBe(undefined);
  });

  it('should return the first value if it is not null', () => {
    expect(ifNull('value', 'default')).toBe('value');
    expect(ifNull(0, 10)).toBe(0);
  });
});

describe('ifNotNull', () => {
  it('should return the replacement value when the original value is not null', () => {
    const result = ifNotNull('original', 'replacement');
    expect(result).toBe('replacement');
  });

  it('should return the original value when the original value is null', () => {
    const result = ifNotNull(null, 'replacement');
    expect(result).toBe(null);
  });

  it('should handle non-string values', () => {
    const result = ifNotNull(123, 'replacement');
    expect(result).toBe('replacement');
  });

  it('should handle undefined values', () => {
    const result = ifNotNull(undefined, 'replacement');
    expect(result).toBe('replacement');
  });
});

describe('ifUndefined', () => {
  it('should return the second value if the first value is undefined', () => {
    expect(ifUndefined(undefined, 'default')).toBe('default');
    expect(ifUndefined(null, 'default')).toBe(null);
  });

  it('should return the first value if it is not undefined', () => {
    expect(ifUndefined('value', 'default')).toBe('value');
    expect(ifUndefined(0, 10)).toBe(0);
  });
});

describe('ifNotUndefined', () => {
  it('should return the replacement value when the original value is not undefined', () => {
    const result = ifNotUndefined('original', 'replacement');
    expect(result).toBe('replacement');
  });

  it('should return the original value when the original value is undefined', () => {
    const result = ifNotUndefined(undefined, 'replacement');
    expect(result).toBe(undefined);
  });

  it('should handle non-string values', () => {
    const result = ifNotUndefined(123, 'replacement');
    expect(result).toBe('replacement');
  });

  it('should handle null values', () => {
    const result = ifNotUndefined(null, 'replacement');
    expect(result).toBe('replacement');
  });
});

describe('ifNullOrUndefined', () => {
  it('should return the second value if the first value is null or undefined', () => {
    expect(ifNullOrUndefined(null, 'default')).toBe('default');
    expect(ifNullOrUndefined(undefined, 'default')).toBe('default');
  });

  it('should return the first value if it is not null or undefined', () => {
    expect(ifNullOrUndefined('value', 'default')).toBe('value');
    expect(ifNullOrUndefined(0, 10)).toBe(0);
  });
});

describe('ifNotNullAndUndefined', () => {
  it('should return the replacement value when the original value is not null or undefined', () => {
    const result = ifNotNullAndUndefined('original', 'replacement');
    expect(result).toBe('replacement');
  });

  it('should return the original value when the original value is null', () => {
    const result = ifNotNullAndUndefined(null, 'replacement');
    expect(result).toBe(null);
  });

  it('should return the original value when the original value is undefined', () => {
    const result = ifNotNullAndUndefined(undefined, 'replacement');
    expect(result).toBe(undefined);
  });

  it('should handle non-string values', () => {
    const result = ifNotNullAndUndefined(123, 'replacement');
    expect(result).toBe('replacement');
  });
});

describe('isEmail', () => {
  it('should return true if the string is a valid email', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('john.doe@example.co.uk')).toBe(true);
  });

  it('should return false if the string is not a valid email', () => {
    expect(isEmail('test@example')).toBe(false);
    expect(isEmail('john.doe@example')).toBe(false);
    expect(isEmail('test@example.')).toBe(false);
  });
});

describe('isUrl', () => {
  it('should return true if the string is a valid URL', () => {
    expect(isUrl('http://example.com')).toBe(true);
    expect(isUrl('https://example.com')).toBe(true);
    expect(isUrl('http://www.example.com')).toBe(true);
    expect(isUrl('https://www.example.com')).toBe(true);
  });

  it('should return false if the string is not a valid URL', () => {
    expect(isUrl('example')).toBe(false);
    expect(isUrl('http://example')).toBe(false);
    expect(isUrl('https://example')).toBe(false);
  });
});

describe('isTelNo', () => {
  it('should return true if the string is a valid telephone number', () => {
    expect(isTelNo('01012345678')).toBe(true);
    expect(isTelNo('02-1234-5678')).toBe(true);
    expect(isTelNo('02-123-4567')).toBe(true);
    expect(isTelNo('+821012345678')).toBe(true);
  });

  it('should return false if the string is not a valid telephone number', () => {
    expect(isTelNo('12345678')).toBe(false);
    expect(isTelNo('02-123456')).toBe(false);
  });
});

describe('isMobileNo', () => {
  it('should return true if the string is a valid mobile number', () => {
    expect(isMobileNo('01012345678')).toBe(true);
    expect(isMobileNo('01112345678')).toBe(true);
    expect(isMobileNo('01612345678')).toBe(true);
    expect(isMobileNo('01812345678')).toBe(true);
    expect(isMobileNo('01912345678')).toBe(true);
    expect(isMobileNo('010-1234-5678')).toBe(true);
    expect(isMobileNo('011-1234-5678')).toBe(true);
    expect(isMobileNo('016-1234-5678')).toBe(true);
    expect(isMobileNo('018-1234-5678')).toBe(true);
    expect(isMobileNo('019-1234-5678')).toBe(true);
    expect(isMobileNo('+821012345678')).toBe(true);
    expect(isMobileNo('+821112345678')).toBe(true);
    expect(isMobileNo('+821612345678')).toBe(true);
    expect(isMobileNo('+821812345678')).toBe(true);
    expect(isMobileNo('+821912345678')).toBe(true);
  });

  it('should return false if the string is not a valid mobile number', () => {
    expect(isMobileNo('12345678')).toBe(false);
    expect(isMobileNo('011-123456')).toBe(false);
    expect(isMobileNo('016-123456')).toBe(false);
    expect(isMobileNo('018-123456')).toBe(false);
    expect(isMobileNo('019-123456')).toBe(false);
  });
});

describe('isCompanyNo', () => {
  it('should return true if the string is a valid company number', () => {
    expect(isCompanyNo('1234567890')).toBe(true);
    expect(isCompanyNo('123-45-67890')).toBe(true);
  });

  it('should return false if the string is not a valid company number', () => {
    expect(isCompanyNo('12345678')).toBe(false);
    expect(isCompanyNo('123-45-678')).toBe(false);
  });
});

describe('isPersonalNo', () => {
  it('should return true if the string is a valid personal number', () => {
    expect(isPersonalNo('1234567890123')).toBe(true);
    expect(isPersonalNo('123456-7890123')).toBe(true);
  });

  it('should return false if the string is not a valid personal number', () => {
    expect(isPersonalNo('12345678')).toBe(false);
    expect(isPersonalNo('123-45-678')).toBe(false);
  });
});

describe('isNumericOnlyText', () => {
  it('should return true if the string contains only numeric characters', () => {
    expect(isNumericOnlyText('1234567890')).toBe(true);
  });

  it('should return false if the string contains non-numeric characters', () => {
    expect(isNumericOnlyText('12345a67890')).toBe(false);
    expect(isNumericOnlyText('12345-67890')).toBe(false);
    expect(isNumericOnlyText('12345.67890')).toBe(false);
  });
});
