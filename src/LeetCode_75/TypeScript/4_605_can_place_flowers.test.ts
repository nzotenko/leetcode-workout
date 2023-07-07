function canPlaceFlowers(f: number[], n: number): boolean {

  const allowedPositions: number[] = [];

  for (let i = 0; i < f.length; i++) {
    if (f[i] === 0 && f[i - 1] !== 1 && f[i + 1] !== 1 && !allowedPositions.includes(i - 1)) {
      allowedPositions.push(i);
    }
  }

  return allowedPositions.length >= n;
}

describe("canPlaceFlowers", () => {
  it.each<[number[], number, boolean]>([
    [[1, 0, 0, 0, 1], 1, true],
    [[1, 0, 0, 0, 1], 2, false],
    [[0, 0, 1, 0, 1], 1, true],
    [[1, 0, 0, 0, 0, 1], 2, false],
    [[1, 0, 0, 0, 0, 1], 1, true],
    [[1, 0, 0, 0, 0, 0, 1], 2, true],
    [[1, 0, 0, 0, 0, 0, 1], 3, false],
  ])(
    "it returns expected result for flowerbed=%s and n=%s",
    (flowerbed, n, expectedResult) => {
      expect(canPlaceFlowers(flowerbed, n)).toEqual(expectedResult);
    }
  );
});
