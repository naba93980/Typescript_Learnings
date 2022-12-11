class User {
    public email: string;
    protected name: string;
    city: string = "";
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

class SubUser extends User {
    public height: string = "6feet";
    printName() {
        console.log(this.name);
    }
}