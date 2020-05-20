for (var i = 0; i < 10; i++) {
    // console.log(i);
}
console.log('============');
for (var i = 9; i > 0; i--) {
    // console.log(i);
}
var employees = [{
        name: 'Thanh Tu'
    },
    {
        name: 'Huy'
    },
    {
        name: 'Hieu'
    }

];
for (var i = 0; i < 3; i++) {
    // console.log(employees[i].name);
};
for (var employee of employees) {
    // console.log(employee);
};
for (var employee in employees) {
    // console.log(employee);
}
var myDog = {
    name: 'Dan',
    age: 1,
    weight: 5
};
for (var value in myDog) {
    console.log(value);
}