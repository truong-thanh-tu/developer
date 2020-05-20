/**Javascript có ba loại bến cơ bản là 
 * Var khai báo một biến, tuy ý khởi tạo nó thành một giá trị
 * Let là khai báo một biến cục bộ, tùy ý khởi tạo giá trị của nó
 * Const khái báo mốt hằng số có tên trong phạm vi khối 
 */
// var a;
// console.log(a);
// console.log(b);
// // var b;
// let c;
// console.log(c);
// console.log(d);
// let d;

// var input;
// if (input === undefined) {
//     console.log('doThis');
// } else {
//     console.log('doThat');
// }

// foo();

// function foo() {
//     console.log('Bar');
// }

// var answer = 42;
// answer = 'Thanks for all the first';
// console.log(answer);

// var sales = 'Toyata';

// function carType(name) {
//     if (name = 'Honda') {
//         return name;
//     } else {
//         return 'Sorry, we don\' stell ' + name + '.';
//     }
// }
// var car = {
//     myCar: 'Saturn',
//     getCar: carType('Honda'),
//     special: sales
// }

// console.log(car.myCar);
// console.log(car.getCar);
// console.log(car.special);

var x = 4; {
    var x = 5;

}
console.log(x);