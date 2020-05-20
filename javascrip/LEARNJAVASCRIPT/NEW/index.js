// var today = new Date();
// console.log(today);

// var mouse = {
//     weight: 0.2,
//     name: 'Zenry',
//     getWeight: function() {
//         console.log(this.weight);
//     }
// };

// mouse not is constructor
// var mouse1 = new mouse();
function Mouse(color) {
    this.type = 'mouse';
    this.color = color;
}
var mouse2 = {
    name: 'mouse'
};

var mouse1 = new Mouse('while');
//console.log(mouse.getWeight());
console.log(mouse1);
console.log(mouse2);