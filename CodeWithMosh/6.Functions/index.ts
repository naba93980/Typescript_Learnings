function calculateTax(income: number, taxyear: number = 2020): (number)//in js u can pass as many arguments even tho only 2 parameter exist but in typescript suplying more args than the no. of parameters mentioned will give error
{
    if (taxyear < 2022)
        return income * 4;
    return income * 8;
}
calculateTax(10000);
console.log( undefined&&20 );
console.log( null&&20 ); //truthy and falsy
console.log( undefined||20 );
console.log( null||20 ); //truthy or falsy
