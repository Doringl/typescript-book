interface IAddTwoNumbers {
    first: number
    second: number
}

export const addTwoNumbers = (params: IAddTwoNumbers) => {
    return params.first + params.second
}
