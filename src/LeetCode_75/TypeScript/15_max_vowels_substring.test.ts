function maxVowels(s: string, k: number): number {
  const isVowel = (symb: string) =>
    "a" === symb ||
    "e" === symb ||
    "i" === symb ||
    "o" === symb ||
    "u" === symb;

  let maxSubstringLength = 0;
  let substringVowelsLength = 0;
  let i = 0;
  while (i < s.length) {
    substringVowelsLength += +isVowel(s[i]);

    if (i >= k) {
      substringVowelsLength -= +isVowel(s[i - k]);
    }

    maxSubstringLength = Math.max(maxSubstringLength, substringVowelsLength);

    if (maxSubstringLength === k) {
      return k;
    }
    i++;
  }

  return maxSubstringLength;
}

describe("maxVowels", () => {
  it.each<[string, number, number]>([
    ["abciiidef", 3, 3],
    ["aeiou", 2, 2],
    ["leetcode", 3, 2],
    ["rhythms", 4, 0],
    ["tryhard", 4, 1],
    ["weallloveyou", 7, 4],
    ["ramadan", 2, 1],
  ])(
    "for string %s and substring lenght %s should return %s",
    (s, k, expected) => {
      expect(maxVowels(s, k)).toBe(expected);
    }
  );
});
