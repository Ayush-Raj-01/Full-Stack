// Numbers

let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance);
console.log(anotherBalance.valueOf());


console.log(typeof balance);
console.log(typeof anotherBalance);


// Boolean

let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// Null and  Undefined

let firstname = null;
let lastname = undefined;
console.log(firstname)
console.log(lastname)


// Strings

let myString = "Hello"
let myStringOne = "Hola";
let username = "Ayush";

let oldGreet = myString + " " + "Ayush";
console.log(oldGreet);

let greetMessage = `Hello ${username} !`;  // string interpolation
console.log(greetMessage);
let demoOne = `Value is ${2 * 2}`;  // ${ } -> itn does the computation work
console.log(demoOne);

// Symbol

let sm1 = Symbol("Ayush");
let sm2 = Symbol("Ayush");

console.log(sm1);