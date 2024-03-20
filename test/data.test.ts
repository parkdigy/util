import { lv, vl, copy } from '../src/methods/data';

describe('lv function', () => {
  it('should return an object with label and value properties', () => {
    const result = lv('label', 'value');
    expect(result).toEqual({ label: 'label', value: 'value' });
  });

  it('should return an object with label, value and other properties', () => {
    const result = lv('label', 'value', { other: 'other' });
    expect(result).toEqual({ label: 'label', value: 'value', other: 'other' });
  });

  it('should return an object with label and value properties when other is undefined', () => {
    const result = lv('label', 'value', undefined);
    expect(result).toEqual({ label: 'label', value: 'value' });
  });
});

describe('vl function', () => {
  it('should return an object with value and label properties', () => {
    const result = vl('value', 'label');
    expect(result).toEqual({ value: 'value', label: 'label' });
  });

  it('should return an object with value, label and other properties', () => {
    const result = vl('value', 'label', { other: 'other' });
    expect(result).toEqual({ value: 'value', label: 'label', other: 'other' });
  });

  it('should return an object with value and label properties when other is undefined', () => {
    const result = vl('value', 'label', undefined);
    expect(result).toEqual({ value: 'value', label: 'label' });
  });
});

describe('copy function', () => {
  it('should create a deep copy of a simple object', () => {
    const obj = { name: 'John', age: 30 };
    const copiedObj = copy(obj);
    expect(copiedObj).toEqual(obj);
    expect(copiedObj).not.toBe(obj);
  });

  it('should create a deep copy of a nested object', () => {
    const obj = { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } };
    const copiedObj = copy(obj);
    expect(copiedObj).toEqual(obj);
    expect(copiedObj).not.toBe(obj);
    expect(copiedObj.address).toEqual(obj.address);
    expect(copiedObj.address).not.toBe(obj.address);
  });

  it('should create a deep copy of an array', () => {
    const arr = [1, 2, 3];
    const copiedArr = copy(arr);
    expect(copiedArr).toEqual(arr);
    expect(copiedArr).not.toBe(arr);
  });

  it('should create a deep copy of a nested array', () => {
    const arr = [1, 2, [3, 4]];
    const copiedArr = copy(arr);
    expect(copiedArr).toEqual(arr);
    expect(copiedArr).not.toBe(arr);
    expect(copiedArr[2]).toEqual(arr[2]);
    expect(copiedArr[2]).not.toBe(arr[2]);
  });
});
