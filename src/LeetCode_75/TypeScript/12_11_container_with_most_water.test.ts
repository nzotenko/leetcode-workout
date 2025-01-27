function maxArea(heights: number[]): number {
  let i = 0;
  let j = heights.length - 1;

  let result = 0;

  while (i !== j) {
    const square = Math.min(heights[i], heights[j]) * (j - i);

    result = Math.max(result, square);

    if (heights[i] < heights[j]) {
      i++;
    } else {
      j--;
    }
  }

  return result;
}

describe("maxArea", () => {
  test.each<[number[], number]>([
    [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
    [[8, 7, 2, 1], 7],
    [[2, 3, 10, 5, 7, 8, 9], 36],
    [[2, 3, 4, 5, 18, 17, 6], 17],
  ])(`maxArea(%s) should return %s`, (heights, expected) => {
    // Act
    const result = maxArea(heights);

    // Assert
    expect(result).toBe(expected);
  });
});
