export const addTwoNumbers = (x: number, y: number) => {
    return x + y
}

addTwoNumbers(1, 2)
// @ts-expect-error
addTwoNumbers('1', 2)
// @ts-expect-error
addTwoNumbers('1', '2')
