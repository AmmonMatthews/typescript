function myName(firstName: string, lastName: string) : string {
    return firstName + lastName
}

let myName2: (first: string, last: string) => string = function (first: string, last: string): string{
    return first + last
}