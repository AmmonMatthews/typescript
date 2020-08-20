// interface User {
//     name: string,
//     id: number
// }

// const user: User = {
//     name: "Ammon",
//     id: 2
// }

// console.log(user)

// class UserAccount {
//     name: string;
//     id: number;

//     constructor(name: string, id: number) {
//         this.name = name;
//         this.id = id;
//     }
// }

// const new_user = new UserAccount("Wendy", 4)

// console.log(new_user)


// Optional Properties in an interface
// the question mark put in the interface allows for it not to be required to be put in the object.
interface SquareConfig {
    color?: string;
    width?: number;
}
// if value is not input into the function it will default to no value. for example the area stays with the default of the newSuare because no width was declare on line 46.
function createSquare(config: SquareConfig): { color: string; area: number; } {
    let newSquare = { color: "white", area: 100 }
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare
}

let mySquare = createSquare({ color: "black" })
console.log(mySquare)