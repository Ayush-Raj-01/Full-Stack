const person = {
    name: "Ayush",
    greet() {
        console.log(`Hi, I am ${this.name}`)
    }
}

person.greet()


const greetFunction = person.greet          // as soon as we transfer this from one memory to another memory or one variable to another variable your context is lost.
greetFunction()


const boundGreet = person.greet.bind({name: "Raja"})
boundGreet()
