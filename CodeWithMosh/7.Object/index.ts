let employee: {

    readonly id: number,

    name: string,
    // name?: string  --> or we can use ? for optional

    retire: (date: Date) => void

} = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
        return 5;
    }
};
employee.name = 'Naba';
employee.retire(new Date(2022, 11, 17));