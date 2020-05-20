var myDog = {
    weight: 5,
    name: 'Dan',
    age: 1,
    bark: function() {
        console.log('Meo Meo my name is ', this.name);
    },
    eat: function(bone) {
        this.weight = this.weight + bone.weight;
        return this.weight;
    }
};
var Bone = {
    weight: 4
}

// myDog.bark();
console.log(myDog.eat(Bone));