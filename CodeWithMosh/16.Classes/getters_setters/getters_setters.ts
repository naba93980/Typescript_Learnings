class User {
    public email: string;
    private name: string;
    city: string = "";
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
    get getEmail(): string {
        return `email is ${this.email}`
    }
    set setEmail(email: string){
        this.email = email;
    }
    getEmail2(): string {
         return `email is ${this.email}`
     }
}

const naba = new User("naba93980@gmail.com", "nabajyoti modak")
naba.city = "agartala";
console.log(naba.getEmail);
naba.setEmail = "nabajyotimodak2000@gmail.com";
console.log(naba.getEmail);
console.log(naba.getEmail2());

// A 'set' accessor cannot have a return type annotation