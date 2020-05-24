import { merge } from '..';

describe('merge', () => {
  it('should create a merged object of two arguments.', () => {
    const a = { a: 5 };
    const b = { b: 10 };

    const result = merge(a, b);

    expect(result).toEqual({
      a: 5,
      b: 10,
    });
  });

  it('should overwrite properties in the first object when there are the same ones in the second object.', () => {
    const a = { a: 5 };
    const b = { a: 10 };

    const result = merge(a, b);

    expect(result.a).toBe(b.a);
  });
});
