function Car( make , model ) {
    this.make = make;
    this.model = model;
}

let myCar = new Car( "Toyota" , "SUPRA")
console.log(myCar)

let myNewCar = new Car( "B M W" , "M5 CS Competition")
console.log(myNewCar)





function Tea(type) {
    this.type = type

    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}
let lemonTea = new Tea( "lemon tea" )
console.log(lemonTea.describe())







function Animal(species){
    this.species = species
}

Animal.prototype.sound = function () {
    return `${this.species} makes a sound`
}

let dog = new Animal ("dog")
console.log(dog.sound())

let cat = new Animal ("cat")
console.log(cat.sound())