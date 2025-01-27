function reverseVowels(s: string): string {
  const symbols = s.toLowerCase().split("");

  const vowelsMap = symbols
    .map((symbol, i) => ("aeiou".includes(symbol) ? [symbol, i] : null))
    .filter(Boolean) as [string, number][];

  const newVowelsPositions = vowelsMap.map(([_, i]) => i).toReversed();

  return symbols
    .map((s, i) =>
      newVowelsPositions.includes(i)
        ? vowelsMap[newVowelsPositions.indexOf(i)][0]
        : s,
    )
    .join("");
}

describe("reverseVowels", () => {
  it.each<[string, string]>([
    ["hello", "holle"],
    ["leetcode", "leotcede"],
  ])("it returns expected result for s=%s", (s, expectedResult) => {
    expect(reverseVowels(s)).toEqual(expectedResult);
  });
});
