/**
 * Data types:
 * Primitive types:
 * -Number
 * -String 
 * -Boolean
 * Special types:
 * -undefined 
 * - null
 * Reference types:
 * -Array
 * -Object
 */
//Number
var a1 = -100;
var a2 = 0.6;
// console.log(a1, a2);

//String
var str = 'Hello World.';
var str1 = "Helle World.";
// console.log(str, str1);
var str2 = 'Hello world \'Tu\'';
// console.log(str2);

//Boole(true,false)
var isHidden = false;
// console.log(isHidden);
var isMale = false;
// console.log(isMale);

///undefined 
var a;
//console.log(a);
a = null;

// console.log(a);

//Bai tap 
//khai bao fullName có kiểu dữ liệu là string
var fullName = 'Truong Thanh Tu';
// console.log(fullName);
//Khai báo age có kiểu dữ liệu là number
var age = 24;
// console.log(age);
// Khai báo giới tính có kiểu dữ liệu là Boolean
var isMale = true;
// console.log(isMale);

// Object 

var cat = {
    name: 'Tom',
    weight: 3,
    isAlive: true
};
// console.log(cat.name);
var person = {
    name: 'Thanh Tu',
    age: 25,
    gender: 'male'
};
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);
var listDogs = [
    { name: 'Cho ta', weight: 2 },
    { name: 'Lap xuong', weight: 4 },
    { name: 'HusKy', weight: 5 }
];
// console.log(listDogs);
console.log(listDogs[0].name);
listDogs[0] = {
        name: 'Shiba',
        weight: 7
    },
    console.log(listDogs[0].name);