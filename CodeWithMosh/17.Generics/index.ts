const score: Array<number> = [];
const names: Array<string> = [];

function identity<Type>(val: Type): Type {
    return val;
}

type Bottle = {
    brand: string,
    count: number
}

const bigBottle: Bottle = {
    brand: "Bisleri",
    count: 15
}

const theBottle = identity<Bottle>(bigBottle)
console.log(theBottle);
