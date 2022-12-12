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


interface Database {
    connection: string,
}
interface DatabaseAdmin extends Database{
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    };
}

let resultOne: object = anotherFunction<boolean, {
    connection: string,
    namKyaHai: string,
    passwordBhiBolDe: string
}>(false, {
    connection: "connect",
    namKyaHai: "nabajyoti Hai",
    passwordBhiBolDe: "nhi Bolunga"
});

let resultTwo=anotherFunction<boolean, DatabaseAdmin>(true, {
    connection: "connect",
    username: "naba",
    password: "pass"
});

console.log(resultOne);
console.log(resultTwo);
