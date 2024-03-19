import uuid from '../src/methods/uuid';

describe('uuid', () => {
  it('should generate a uuid', () => {
    const id = uuid();
    expect(id).toHaveLength(36);
    expect(id.split('-')).toHaveLength(5);
  });

  it('should generate a uuid without dashes when removeDash is true', () => {
    const id = uuid(true);
    expect(id).toHaveLength(32);
    expect(id.includes('-')).toBe(false);
  });

  it('should generate a uuid with dashes when removeDash is false', () => {
    const id = uuid(false);
    expect(id).toHaveLength(36);
    expect(id.split('-')).toHaveLength(5);
  });
});
