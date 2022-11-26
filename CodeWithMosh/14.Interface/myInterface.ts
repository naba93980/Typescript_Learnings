interface User {
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string,
    startTrail(): string,
    getCoupon(couponName: string): number
}

const nabajyoti: User = {
    email: "naba93980@gmail.com",
    userId: 2211,
    startTrail: () => {
        return 'trail started';
    },

    // not necessary for parameter name in definition to be same as that in declaration above
    getCoupon: (name = "dosh") => {
        return 10;
    }
}
console.log(nabajyoti.getCoupon("ten"));
