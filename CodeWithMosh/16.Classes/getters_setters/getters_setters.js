var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return "email is ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getEmail2 = function () {
        return "email is ".concat(this.email);
    };
    return User;
}());
var naba = new User("naba93980@gmail.com", "nabajyoti modak");
naba.city = "agartala";
console.log(naba.getEmail);
naba.setEmail = "nabajyotimodak2000@gmail.com";
console.log(naba.getEmail);
console.log(naba.getEmail2());
// A 'set' accessor cannot have a return type annotation
