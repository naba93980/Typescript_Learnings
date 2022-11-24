var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(0);

// optional property access operator
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);

// a=10 evaluates to 10, basically console.log(a=10) will print 10

// let log: any = (message: string) => console.log(message);
var log = null;
log === null || log === void 0 ? void 0 : log('a');
