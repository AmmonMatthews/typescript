function myName(firstName: string, lastName: string) : string {
    return firstName + lastName
}

//This is epxlicitly declaring that the type inline with the function and variable. 
let myName2: (first: string, last: string) => string = function (first: string, last: string): string{
    return first + last
}