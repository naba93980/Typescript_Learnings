function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(0);
// optional property access operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
