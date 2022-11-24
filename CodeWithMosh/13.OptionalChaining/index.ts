type Customer = {
    birthday: Date;
}
function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

// optional property access operator
console.log(customer?.birthday?.getFullYear);

// a=10 evaluates to 10, basically console.log(a=10) will print 10

// let log: any = (message: string) => console.log(message);
let log: any = null
log?.('a');


