var nabajyoti = {
    email: "naba93980@gmail.com",
    userId: 2211,
    startTrail: function () {
        return 'trail started';
    },
    // not necessary for parameter name in definition to be same as that in declaration above
    getCoupon: function (name) {
        if (name === void 0) { name = "dosh"; }
        return 10;
    }
};
console.log(nabajyoti.getCoupon("ten"));
