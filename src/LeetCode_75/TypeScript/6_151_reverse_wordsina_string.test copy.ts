function reverseWords(s: string): string {
  return s.trim().split(' ').filter(Boolean).reverse().join(' ');
}


describe("reverseWords", () => {
  it.each<[string, string]>([
    ["the sky is blue", "blue is sky the"],
    ["  hello world  ", "world hello"],
    ["a good   example", "example good a"],
    ["  Bob    Loves  Alice   ", "Alice Loves Bob"],
    ["Alice does not even like Bob", "Bob like even not does Alice"],
  ])("it returns expected result r=\"%s\" for s=\"%s\"", (s, expectedResult) => {
    expect(reverseWords(s)).toEqual(expectedResult);
  } );
});