var score = [];
var names = [];
function identity(val) {
    return val;
}
var bigBottle = {
    brand: "Bisleri",
    count: 15
};
var theBottle = identity(bigBottle);
console.log(theBottle);
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
var resultOne = anotherFunction(false, {
    connection: "connect",
    namKyaHai: "nabajyoti Hai",
    passwordBhiBolDe: "nhi Bolunga"
});
var resultTwo = anotherFunction(true, {
    connection: "connect",
    username: "naba",
    password: "pass"
});
console.log(resultOne);
console.log(resultTwo);
