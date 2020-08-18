interface User {
    name: string,
    id: number
}

const user: User = {
    name: "Ammon", 
    id: 2
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const new_user = new UserAccount("Wendey", 4)