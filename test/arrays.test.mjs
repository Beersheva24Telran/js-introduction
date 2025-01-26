import {describe, it, expect} from 'vitest'
describe("iterating elements of array", () => {
    const ar = [1, 2, 3, 4];
    it("printing out elements using for-in", () => {
       for(let i in ar) {
        console.log(ar[i]);
       }

        
    })
    it("printing out elements using for-of", () => {
        for(let num of ar) {
         console.log(num);
        }
     })
     it ("printing out elements using forEch method", () => {
        ar.forEach(e => console.log(e));
     })
     it ("printing out index and element from array", () => {
        ar.forEach((e, i) => console.log(`index: ${i}; element: ${e}`))
     })
    
    
})