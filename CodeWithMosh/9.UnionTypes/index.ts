function kgToLbs(weight: number | string) : number {
    // Narrowing 
    if (typeof weight === 'number')
        return weight * 2;
    else {        
        return Number(weight.match(/\d+/g));
    }
    
}
console.log(kgToLbs(5));
console.log(kgToLbs('10kg'));
console.log(parseInt('10kg'));


