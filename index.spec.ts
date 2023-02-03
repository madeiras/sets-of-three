import { countSetsOfThree } from './index';

/**
 * Test `countSetsOfThree`.
 */

describe('countSetsOfThree()', () => {
  [
    { numbers: [1, 2, 3, 4], result: 2, threshold: 7 },
    { numbers: [4, 1, 3, 2], result: 2, threshold: 7 },
    { numbers: [1, 2, 3, 9], result: 1, threshold: 7 },
    { numbers: [2, 2, 2, 2], result: 4, threshold: 7 },
    { numbers: [3, 3, 3, 3], result: 0, threshold: 7 },
    { numbers: [1, 2, 3, 4, 5], result: 2, threshold: 7 },
  ].forEach((input) => {
    it(`should return "${input.result}" for input numbers "${input.numbers}" and threshold "${input.threshold}"`, () => {
      expect(countSetsOfThree(input.numbers, input.threshold)).toEqual(input.result);
    });
  });
});
