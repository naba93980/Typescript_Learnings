interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: Array<T>;
    constructor() {
        this.cart = [];
    }
    addToCart(product: T) {
        this.cart.push(product);
    }
    printCart(): void {
        console.log(this.cart);
    }
}

let cartOne = new Sellable<Course>();
cartOne.addToCart({
    name: "python course",
    author: "nabajyoti",
    subject: "computer science"
})
cartOne.printCart();