var employee = {
    id: 1,
    name: '',
    retire: function (date) {
        console.log(date);
    }
};
employee.name = 'Naba';
employee.retire(new Date(2022, 11, 17));
