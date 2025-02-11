/*
1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and store the result in a variable named 'sum'.
*/ 

let sum = 0;
let i = 1;

while (i <=5) {
    sum = sum + i;
    i++;
}
console.log(sum);

/*
2. Write a 'while' loop that count down from 5 to 1 and store the result in array named 'countdown'.
*/

let countdown = [];
let j = 5;
while(j>0){
    countdown.push(j);
    j--;
}
console.log(countdown)

/*
3. Write a 'do-while' loop that prompts a user to enter their favorite tea type until they enter "stop". 
    Store each tea type in an array named "teacollection".
*/

    // RUN THIS CODE ON CONSOLE OF A CHROME
// let teacollection = [];
// let tea

// do {
//     tea = prompt(`Enter your favourite tea (type "stop" to finish)`)
    
//     if (tea !== "stop"){
//         teacollection.push(tea)
//     }
// } while (tea !== "stop");

/*
4. Write a 'do-while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'.
*/

let total = 0
let k = 1
do {
    total += k
    k++
} while (k <= 3);
console.log(total)

/*
5. Write a 'for' loop that multipliea each element in the array'[2, 4, 6]' by 2 and store the result in a new array named 'multipliedNumber'.
*/

let multipliedNumber = []
let number = [2, 4, 6]
for (let l = 0; l < number.length; l++) {
    // multipliedNumber.push(takeNumber)
    // takeNumber = number[l] * 2;           // this cane also be written as

    multipliedNumber.push(number[l] * 2)
}
console.log(multipliedNumber)

/*
6. Write a 'for' loop that lists all the cities in the array'["Paris", "New Tork", "Tokyo", "London"]' and stores eash city in a new array named 'cityList'.
*/

let cities = ["Paris", "New Tork", "Tokyo", "London"]
let cityList = []
for (let c = 0; c < cities.length; c++) {
    const element = cities[c];
    cityList.push(element)   
}
console.log(cityList)
