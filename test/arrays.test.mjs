import {describe, it, expect} from 'vitest'
describe("sorting array", () => {
   const array = [10, 1000, -10, 30, 60]
   it("numbers native sorting soting", () => {
        const expected = [-10, 10,30, 60, 1000 ];
        expect(array.toSorted((a, b) => a - b)).toEqual(expected);
   })
   
})