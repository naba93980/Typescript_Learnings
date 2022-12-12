var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    Sellable.prototype.printCart = function () {
        console.log(this.cart);
    };
    return Sellable;
}());
var cartOne = new Sellable();
cartOne.addToCart({
    name: "python course",
    author: "nabajyoti",
    subject: "computer science"
});
cartOne.printCart();
