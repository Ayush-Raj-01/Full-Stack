// Checking if a number is greater than another number:

let num1 = 4;
let num2 = 8;

console.log("I am regular top code");

if (num1 > num2) {
    console.log("Num 1 is greater than num2");
} else {
    console.log("Nope!, num1 is not greater");
}
console.log("I am regular bottom code");

// Checking if a string is equal to another string

let username = "Ayussshh_07";
let anotherUsername = "Ayussshh_07";

if (username == anotherUsername) {
    console.log("Please select another username")
} else {
    console.log("You can use this username")
}

// Checking if a variable is a number or not

let score = "44";

if (typeof score === "number") {
    console.log("Yep, this is a number");
} else {
    console.log("No that is not a number");
}

// Checking if a boolean value is true or false

let  isTeaReady = false ; 

if (isTeaReady) {
    console.log("Tea is ready")
} else {
    console.log("Tea is not ready")
}

// Checking if an array is empty or not

let item = [];

console.log(item.length);

if (item.length == 0) {
    console.log("Array is empty")
} else {
    console.log("Array is not empty");
}