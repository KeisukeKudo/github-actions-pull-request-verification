const sum = require('./sum');

test('success', () => expect(sum(1, 2)).toBe(3));

test('failed', () => expect(1).toBe(3));
