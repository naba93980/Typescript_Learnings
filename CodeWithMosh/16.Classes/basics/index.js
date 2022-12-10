var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var User2 = /** @class */ (function () {
    function User2(email2, name2) {
        this.email2 = email2;
        this.name2 = name2;
    }
    return User2;
}());
var naba = new User("naba93980@gmail.com", "nabajyoti modak");
var naba2 = new User2("naba93980@gmail.com", "nabajyoti modak");
naba.city = "agartala";
console.log(naba);
console.log(naba2);
