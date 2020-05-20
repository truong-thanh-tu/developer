// // /**Các method của một array 
// //  *  concat 
// //  * push
// //  * pop
// //  * shift
// //  * unshift
// //  * slice
// //  * splice
// //  * find filter, sort , map , reduce
// //  */
// // var a = [1, 1, 2, 3, ];
// // var b = [3, 4];

// // // var c = a.concat(b);
// // // var c = a.push(b);
// // // var c = a.shift();
// // var c = a.unshift(b);
// // // console.log(a);
// // // console.log(c);

// // var number = [1, 2, 3, 4];
// // // var squareNumbers = number.map(function(x) {
// // // return x * x;
// // // })
// // // console.log(squareNumbers);
// // var rectangles = [{
// //         width: 10,
// //         heigh: 5
// //     },
// //     {
// //         width: 13,
// //         heigh: 5
// //     },
// //     {
// //         width: 14,
// //         heigh: 5
// //     }
// // ]
// // var tranformR = rectangles.map(function(ojb) {
// //     return 'ractangle :' + ojb.width * ojb.heigh;
// // });
// // // console.log(tranformR);
// // var supNumber = number.filter(function(x) {
// //     return x % 2 == 0;
// // })
// // console.log(supNumber);
// // var number = [1, 2, 3, 4];
// // var subNumbe = number.find(function(x) {
// //     return x === 3;
// // })
// // console.log(subNumbe);
// var number = [1, 2, 3];
// var reduceNumber = number.reduce(function(a, b) {
//     return a + b;
// });
// console.log(reduceNumber);
var orders = [{
        name: ' A',
        quantity: 2,
        unitPrice: 100
    },
    {
        name: 'B',
        quantity: 1,
        unitPrice: 400
    },
    {
        name: 'C',
        quantity: 3,
        unitPrice: 100
    }
];
var sumOrder = orders.reduce(function(valueBefore, valueAfter) {
    return valueBefore + (valueAfter.quantity * valueAfter.unitPrice);
}, 0);
// var sumOrder = orders.length;
console.log(sumOrder);