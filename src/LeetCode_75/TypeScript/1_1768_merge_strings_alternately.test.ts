function mergeAlternately(word1: string, word2: string): string {
  const word1Symbols = word1.split("");
  const word2Symbols = word2.split("");

  const iterCount = Math.min(word1.length, word2.length);

  let resultWord = "";

  for (let i = 0; i < iterCount; i++) {
    resultWord += word1Symbols.shift();
    resultWord += word2Symbols.shift();
  }

  resultWord += word1Symbols.join("");
  resultWord += word2Symbols.join("");

  return resultWord;
}

describe("mergeAlternately", () => {
  it.each<[string, string, string]>([
    ["abc", "pqr", "apbqcr"],
    ["ab", "pqrs", "apbqrs"],
    ["abcd", "pq", "apbqcd"],
  ])("it returns expected result for a=%s and b=%s", (a, b, expectedResult) => {
    expect(mergeAlternately(a, b)).toEqual(expectedResult);
  });
});
