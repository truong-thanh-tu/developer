var people = [{
        name: 'Alice',
        age: 21
    },
    {
        name: 'Max',
        age: 20
    },
    {
        name: 'Jane',
        age: 20
    }
];
var sortPeople = people.sort(function(a, b) {
    return a.age - b.age;
})
console.log(sortPeople);