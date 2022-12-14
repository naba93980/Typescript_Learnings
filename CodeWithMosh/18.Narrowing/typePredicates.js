function isFish(pet) {
    return pet.swim !== undefined;
    return false;
}
var pet = {
    swim: function () {
        console.log("swim here");
    },
    fish: "rui"
};
var pet2 = {
    fly: function () {
        console.log("fly in sky");
    },
    bird: "ostrich"
};
console.log(isFish(pet));
console.log(isFish(pet2));
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird Food";
    }
}
/*

'pet is Fish' is our type predicate in this example. A predicate takes the form 'parameterName is Type', where parameterName must be the name of a parameter from the current function signature. Any time isFish is called with some variable, TypeScript will narrow that variable to that specific type if the original type is compatible.

*/ 
