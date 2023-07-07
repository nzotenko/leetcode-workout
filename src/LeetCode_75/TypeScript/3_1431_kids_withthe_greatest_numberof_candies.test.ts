function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  return candies.map(
    (candiesCount, i) =>
      !candies.some(
        (otherCandiesCount) => otherCandiesCount > candiesCount + extraCandies
      )
  );
}

describe("kidsWithCandies", () => {
  it.each<[number[], number, boolean[]]>([
    [[2, 3, 5, 1, 3], 3, [true, true, true, false, true]],
    [[4, 2, 1, 1, 2], 1, [true, false, false, false, false]],
    [[12, 1, 12], 10, [true, false, true]],
  ])(
    "it returns expected result for candies=%s and extraCandies=%s",
    (candies, extraCandies, expectedResult) => {
      expect(kidsWithCandies(candies, extraCandies)).toEqual(expectedResult);
    }
  );
});
