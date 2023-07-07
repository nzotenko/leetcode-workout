function gcdOfStrings(str1: string, str2: string): string {
    if (str1[0] !== str2[0]) {
        return '';
    }

    let len = Math.min(str1.length, str2.length);
    let divisor = '';

    while (len > 0) {
        const testDivisor = str1.slice(0, len);
        const regex = new RegExp(`^(${testDivisor})+$`);

        if (regex.test(str1) && regex.test(str2)) {
            divisor = testDivisor;
            break;
        }
        
        len--;
    }

    return divisor;
}


describe("gcdOfStrings", () => {
    it.each<[string, string, string]>([
        ["ABCABC", "ABC", "ABC"],
        ["ABABAB", "ABAB", "AB"],
        ["LEET", "CODE", ""],
    ])("it returns expected result for str1=%s and str2=%s", (str1, str2, expectedResult) => {
        expect(gcdOfStrings(str1, str2)).toEqual(expectedResult);
    });
});