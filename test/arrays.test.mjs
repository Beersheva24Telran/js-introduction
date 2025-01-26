import {describe, it, expect} from 'vitest'
const array = [10, 1000, -10, 30, 60];
describe("slice, join, string-split", () => {
    it("slice method", () => {
        const array = [1, 2, 3, 4, 5];
        const expected  = [2, 3, 4];
        expect(array.slice(1, 4)).toEqual(expected);
        const copyExpected = [1, 2, 3, 4, 5];
        expect(array.slice()).toEqual(copyExpected);
    })
    it("join method", () => { 
        const expectedStr = "10;1000;-10;30;60";
        expect(array.join(";")).toBe(expectedStr);
        const arStr = expectedStr.split(/;/);
        expect(arStr).toEqual(array.map(s => s.toString()));
    })
})
