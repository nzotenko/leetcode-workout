function moveZeroes(nums: number[]): void {
  if (nums.length <= 1) {
    return;
  }

  let i = nums.length - 1;
  let lastZeroIndex = nums.length - 1;
  while (i >= 0) {
    if (nums[i] === 0) {
      if (i === lastZeroIndex) {
        i--;
        lastZeroIndex--;
        continue;
      }

      let j = i;
      while (j !== lastZeroIndex) {
        let tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
        j++;
      }

      lastZeroIndex--;
    }
    i--;
  }
}

describe("moveZeroes", () => {
  it.each<{ input: number[]; output: number[] }>([
    {
      input: [0, 1, 0, 3, 12],
      output: [1, 3, 12, 0, 0],
    },
    {
      input: [0],
      output: [0],
    },
    {
      input: [0, 0],
      output: [0, 0],
    },
  ])("returns expected %s", (testCase) => {
    moveZeroes(testCase.input);

    expect(testCase.input).toEqual(testCase.output);
  });
});
