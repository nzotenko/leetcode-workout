function compress(chars: string[]): number {
  if (chars.length === 0) {
    return 0;
  }

  let compressedString = "";
  let count = 0;
  let lastChar = chars[0];

  while (chars.length > 0) {
    if (chars[0] === lastChar) {
      count++;
    } else {
      compressedString += `${lastChar}${count > 1 ? count : ""}`;
      count = 1;
      lastChar = chars[0];
    }

    if (chars.length === 1) {
      compressedString += `${lastChar}${count > 1 ? count : ""}`;
    }

    chars.shift();
  }

  chars.push(...compressedString.split(""));

  return compressedString.length;
}

describe("compression", () => {
  it.each<{ input: string[]; output: number; mutated: string[] }>([
    {
      input: ["a", "a", "b", "b", "c", "c", "c"],
      output: 6,
      mutated: ["a", "2", "b", "2", "c", "3"],
    },
    {
      input: ["a"],
      output: 1,
      mutated: ["a"],
    },
    {
      input: ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"],
      output: 4,
      mutated: ["a", "b", "1", "2"],
    },
    {
      input: ["a", "a", "b", "b", "c", "c", "c"],
      output: 6,
      mutated: ["a", "2", "b", "2", "c", "3"],
    },
    {
      input: ["a", "b", "c"],
      output: 3,
      mutated: ["a", "b", "c"],
    },
  ])("returns expected %s", (testCase) => {
    expect(compress(testCase.input)).toBe(testCase.output);
    expect(testCase.input).toEqual(testCase.mutated);
  });
});
