import canIterate from '../components/canIterate/canIterate';

describe('canIterate fn: ', () => {
  const cases = [
    [new Map(), true],
    [new Set(), true],
    [null, false],
    [45, false],
    ['str', true],
  ];

  test.each(cases)('return boolean', (testCase, result) => {
    expect(canIterate(testCase)).toBe(result);
  });
});
