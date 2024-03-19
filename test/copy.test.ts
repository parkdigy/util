import copy from '../src/methods/copy';

describe('util.copy', () => {
  it('should create a deep copy of an object', () => {
    const obj = { name: 'John', age: 30 };
    const copiedObj = copy(obj);
    expect(copiedObj).toEqual(obj);
    expect(copiedObj).not.toBe(obj);
  });

  it('should create a deep copy of an array', () => {
    const arr = [1, 2, 3];
    const copiedArr = copy(arr);
    expect(copiedArr).toEqual(arr);
    expect(copiedArr).not.toBe(arr);
  });

  it('should create a deep copy of a nested object', () => {
    const obj = { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } };
    const copiedObj = copy(obj);
    expect(copiedObj).toEqual(obj);
    expect(copiedObj).not.toBe(obj);
    expect(copiedObj.address).toEqual(obj.address);
    expect(copiedObj.address).not.toBe(obj.address);
  });
});
