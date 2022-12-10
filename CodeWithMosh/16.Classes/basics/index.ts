class User {
    public email: string;
    private name: string;
    city: string = "";
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

class User2 {
    constructor(public email2: string, private name2: string) {}
}

const naba = new User("naba93980@gmail.com", "nabajyoti modak")
const naba2 = new User2("naba93980@gmail.com", "nabajyoti modak")
naba.city = "agartala";
console.log(naba);
console.log(naba2);
