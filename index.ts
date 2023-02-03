/**
 * Get sets of three
 */

function getSetsOfThree(numbers: number[]) {
  const sets = [];

  for (let firstIndex = 0; firstIndex < numbers.length - 2; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < numbers.length - 1; secondIndex++) {
      for (let thirdIndex = secondIndex + 1; thirdIndex < numbers.length; thirdIndex++) {
        sets.push([numbers[firstIndex], numbers[secondIndex], numbers[thirdIndex]]);
      }
    }
  }

  return sets;
}

/**
 * Count sets of three
 */

export const countSetsOfThree = (numbers: number[], threshold: number) => {
  return getSetsOfThree(numbers).reduce((result, set) => {
    if (set[0] + set[1] + set[2] <= threshold) {
      result++;
    }

    return result;
  }, 0);
};
