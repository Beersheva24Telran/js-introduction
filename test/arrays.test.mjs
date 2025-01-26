import {describe, it, expect} from 'vitest'
const array = [10, 1000, -10, 30, 60];
describe("array introspecting", () => {
  
   const objects = [
    {x:4},
    {x:5}
]
   it(" includes", () => {
        
        expect(array.includes(1000)).toBeTruthy();
        expect(array.includes(200)).toBeFalsy();
        expect(array.includes({x:4})).toBeFalsy();
   });
   it(" testing for array of objects", () => {
        expect(objects.find(obj => obj.x === 4)).toBeTruthy();
        expect(objects.find(obj => obj.x === 1)).toBeFalsy();
   })
   it ("testing for all elements match acondition", () => {
    expect(array.every(num => num % 2 === 0)).toBeTruthy();
    expect(array.some(num => num % 2 !== 0)).toBeFalsy();
   
   } )

})
