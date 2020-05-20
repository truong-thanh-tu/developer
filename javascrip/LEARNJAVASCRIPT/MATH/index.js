/**
 * Math object in Javascript
 * Math.PI
 * Math.ceil //ceiling
 * Math.floor 
 * Math.round 
 * Math.max(x1,x2)
 * Math.min(x1,x2)
 * Math random.
 */
// console.log(Math.PI);
// console.log(Math.ceil(9.7));
// console.log(Math.floor(8.9));
// console.log(Math.round(5.6));
// console.log(Math.max(5, 6));
// console.log(Math.min(1, 2));
// console.log(Math.random());

function tossCoin() {
    var coin = Math.random();
    if (coin < 0.5) {
        console.log('Map up');
    } else {
        console.log('Map ngua');
    }
};
tossCoin();