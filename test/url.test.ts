import urlJoin from '../src/methods/urlJoin';

describe('util.url', () => {
  describe('join', () => {
    it('should join multiple parts into a single URL', () => {
      expect(urlJoin('https://example.com', 'api', 'users')).toBe('https://example.com/api/users');
      expect(urlJoin('/api', '/users')).toBe('/api/users');
      expect(urlJoin('https://example.com/', 'api/')).toBe('https://example.com/api/');
      expect(urlJoin('https://example.com', 'api', '?page=1')).toBe('https://example.com/api?page=1');
    });
  });
});
