import { base64Encode, base64Decode } from '../src/methods/base64';

describe('util.base64', () => {
  it('should encode the data to base64', () => {
    const data = 'Hello, World!';
    const encodedData = base64Encode(data);
    expect(encodedData).toBe('SGVsbG8sIFdvcmxkIQ==');
  });

  it('should decode the base64 encoded data', () => {
    const encodedData = 'SGVsbG8sIFdvcmxkIQ==';
    const decodedData = base64Decode(encodedData);
    expect(decodedData).toBe('Hello, World!');
  });
});
