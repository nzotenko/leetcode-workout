/**
 * @see https://leetcode.com/problems/product-of-array-except-self/
 */
function productExceptSelf(nums: number[]): number[] {
  const newArr: number[] = [];
  let zeroCount = 0;
  let multiplier = 1;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === 0) {
      zeroCount++;
      i++;

      if (zeroCount > 1) return new Array(nums.length).fill(0);
      continue;
    }

    multiplier = multiplier * nums[i];
    i++;
  }

  i = nums.length - 1;

  while (i >= 0) {
    if (zeroCount > 0) {
      if (nums[i] !== 0) {
        newArr[i] = 0;
      } else if (nums[i] === 0) {
        newArr[i] = multiplier;
      }
      i--;
      continue;
    }

    newArr[i] = multiplier * Math.pow(nums[i], -1);
    i--;
  }

  return newArr;
}

describe("productExceptSelf", () => {
  it.each<[number[], number[]]>([
    [
      [1, 2, 3, 4],
      [24, 12, 8, 6],
    ],
    [
      [-1, 1, 0, -3, 3],
      [0, 0, 9, 0, 0],
    ],
  ])("it returns expected result r=%s for nums=%s", (nums, expectedResult) => {
    expect(productExceptSelf(nums)).toEqual(expectedResult);
  });
});
