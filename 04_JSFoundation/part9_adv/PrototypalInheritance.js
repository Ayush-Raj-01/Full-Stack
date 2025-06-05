        // prototypal inheritance is just inheritance being done in the prototypes (Objects inherit directly from other objects)


function Person(name) {
    this.name = name
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`)
}

let ayush = new Person("Ayush Raj")
ayush.greet()