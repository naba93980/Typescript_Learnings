var nabajyoti = {
    email: "naba93980@gmail.com",
    userId: 2211,
    githubToken: "token",
    startTrail: function () {
        return 'trail started';
    },
    getCoupon: function (name) {
        if (name === void 0) { name = "dosh"; }
        return 10;
    }
};
console.log(nabajyoti.getCoupon("ten"));
// type cannot be reopened, but interfaces can be
// type can be extended with intersection, interface can be extended with 'extend' keyword
