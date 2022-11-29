interface User {
    githubToken: string
}

interface User {
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    getCoupon(couponName: string): number
}

interface Admin extends User {
    role?: "admin" | "ta" | "learner",
}

const nabajyoti: Admin = {
    email: "naba93980@gmail.com",
    userId: 2211,
    githubToken: "token",
    startTrail: () => {
        return 'trail started';
    },
    getCoupon: (name = "dosh") => {
        return 10;
    }
}
console.log(nabajyoti.getCoupon("ten"));


// type cannot be reopened, but interfaces can be
// type can be extended with intersection, interface can be extended with 'extend' keyword
