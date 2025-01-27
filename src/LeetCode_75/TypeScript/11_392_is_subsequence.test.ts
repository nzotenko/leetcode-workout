function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) {
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    const foundIndex = t.indexOf(s[i]);

    if (foundIndex !== -1) {
      if (s.length === 1) {
        return true;
      } else if (t.length === 1) {
        return false;
      }

      return isSubsequence(s.slice(1), t.slice(foundIndex + 1));
    }
  }

  return false;
}

describe("isSubsequence", () => {
  test.each<[string, string, boolean]>([
    ["abc", "ahbgdc", true],
    ["axc", "ahbgdc", false],
  ])(`isSubsequence(%s, %s) should return %s`, (s, t, expected) => {
    // Act
    const result = isSubsequence(s, t);

    // Assert
    expect(result).toBe(expected);
  });
});
