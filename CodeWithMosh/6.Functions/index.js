function calculateTax(income, taxyear) {
    if (taxyear === void 0) { taxyear = 2020; }
    if (taxyear < 2022)
        return income * 4;
    return income * 8;
}
calculateTax(10000);
console.log(undefined && 20);
console.log(null && 20); //truthy and falsy
console.log(undefined || 20);
console.log(null || 20); //truthy or falsy
var arrFunc = function () {
    console.log("hello");
};
arrFunc();
