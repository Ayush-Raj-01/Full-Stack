let car = {
    make: "BMW",
    model: "M5 CS",
    year: 2019,
    start: function (){
        return `${this.make} ${this.model} car got started in ${this.year}`
    }
}

console.log(car.start())




// PROTOTYPE CHAIN

Array.prototype.ayush = function () {
    return `Custom method ${this}`
}

let myArray = [ 1, 2, 3]
console.log(myArray.ayush())
let myNewArray = [ 1, 2, 3, 4, 5, 6]
console.log(myNewArray.ayush())




        // CLASS in JS

class Vehicle {
    constructor (make , model){
        this.make =  make,
        this.model = model
    }
    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

        // INHERITANCE IN JS

class Car extends Vehicle{
    drive(){
        return `${this.make} : Thiss is an inheritance example`
    }
}

let myCar = new Car("Toyota" , "Supra")
console.log(myCar.start())
console.log(myCar.drive())



        // ENCAPSULATION 

class BankAccount {
    #balance = 0     // after using " # "  then that will only be accesed within the class but annybody outside the class will not be able to acess it 

    deposit(amount){
        this.#balance += amount
        return this.#balance
    }
    getBalance(){
        return `$ ${this.#balance}`
    }
}
let account = new BankAccount()
console.log(account.getBalance())



        // ABSTRACTION

class CoffeeMachine {
    start(){
        // call DB
        // filter values 
        return `Starting the machine...`
    }
    brewCoffee(){
        // cpmlex calculations
        return `Brewing coffee`
    }

    pressStartButton(){
        let msgone = this.start();
        let msgtwo = this.brewCoffee()
        return `${msgone} \n${msgtwo}`
    }

}

let myMachine = new CoffeeMachine()
// console.log(myMachine.start())
// console.log(myMachine.brewCoffee())
console.log(myMachine.pressStartButton())



        // POLYMORPHISM

class Bird {
    fly () {
        return `flyingg...`
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly())
console.log(penguin.fly())



        // STATIC METHOD = statics are special method which can only be called by the class itself nobody else can call it

class Calculator{
    static add(a, b){
        return a + b
    }
}

    // we can't use this way 
// let miniCal = new Calculator()
// console.log(miniCal.add( 2, 3 ))

        //  instead we can directly call 'calculator'
console.log(Calculator.add( 2, 3))



        // GETTERS AND SETTERS

class Employee {
    #salary
    constructor (name , salary){
        if (salary < 0 ) {
            throw new Error("Salary cannot be in negative")
        }
        this.name = name,
        this.#salary = salary
    }

    get salary(){
        return "You are not allowed to see salary"
    }

    set salary(value){
        if (value < 0 ) {
            console.error("Invaiid salary")
        }
        else{
            this._salary = value
        }
    }
}

let emp = new Employee("Ayush")
console.log(emp._salary)
emp.salary = -60000