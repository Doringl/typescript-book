/* TypeScript should not warn below as
    Parameter 'x' implicitly has an 'any' type. 
    Parameter 'y' implicitly has an 'any' type. 
*/
export const addTwoNumbers = (x, y) => {
    return x + y
}

addTwoNumbers(1, 2)
// TypeScript should warn below as Argument of type 'string' is not assignable to parameter of type 'number'.
addTwoNumbers('1', 2)
addTwoNumbers('1', '2')
