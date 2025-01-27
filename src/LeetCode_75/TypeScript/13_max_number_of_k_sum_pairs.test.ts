function maxOperations(nums: number[], k: number): number {
  const count = new Map<number, number>();
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const diff = k - nums[i];

    if (diff >= 0) {
      const j = count.get(nums[i]) ?? 0;

      if (j > 0) {
        result++;
        count.set(nums[i], j - 1);
      } else {
        count.set(diff, (count.get(diff) || 0) + 1);
      }
    }
  }

  return result;
}

describe("maxOperations", () => {
  it.each<[number[], number, number]>([
    [[1, 2, 3, 4], 5, 2],
    [[3, 1, 3, 4, 3], 6, 1],
    [[4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2, 2],
    [[2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3, 4],
  ])("maxOperations(%s, %s) should return %s", (nums, k, expected) => {
    // Act
    const result = maxOperations(nums, k);

    // Assert
    expect(result).toBe(expected);
  });
});
