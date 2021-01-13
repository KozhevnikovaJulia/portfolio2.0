export const requiredValidate =  (value: string) => {
    if (value) return undefined
    return "Field is required!"
}
export const maxLengthValidate= (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) return "Max length is ${maxLength} symbols!"
    return undefined
}


  