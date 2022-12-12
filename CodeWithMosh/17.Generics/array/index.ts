function getSearchProducts<T1, T2>(products: Array<T1>): T1 {
    return products[0];
}

console.log(getSearchProducts<number, string>([1,2,3,4,5]));


const getMoreSearchProducts = <T1,>(products: Array<T1>): T1 => {
    return products[0];
}

console.log(getMoreSearchProducts<number>([1, 2, 3, 4, 5]));