console.log('Thanh Tu');

function Mouse(color) {
    this.color = color;
    this.dead = false;
}
Mouse.prototype.die = function() {
    this.dead = true;
}

function Cat() {
    this.stomach = []
}
Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
    mouse.die();
}
var mickey = new Mouse('black');
var jerry = new Cat();
jerry.eat(mickey);
console.log(mickey);
console.log(jerry);